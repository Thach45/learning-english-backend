# Learning Status Changes

## Overview
Updated the learning system to use only 2 statuses: `review` and `mastered` instead of 3 statuses (`new`, `review`, `learned`, `mastered`).

## Changes Made

### 1. Status Flow
**Before:**
```
new -> review -> learned -> mastered
```

**After:**
```
new (no record) -> review -> mastered
```

### 2. Logic Improvements

#### A. New Word Detection - OPTION 1: UserVocabularyProgress Primary Check
- **Before:** Only checked `UserVocabularyProgress` table
- **After:** Uses `UserVocabularyProgress` as primary check
- **Logic:** Simple check - if no progress record exists, it's a new word
- **Benefit:** Simple, clear, and allows same word in different categories

#### B. XP Award Logic - SIMPLE SYSTEM
- **No progress record:** Award XP for new word (10 XP)
- **Has progress record:** Award XP for review (1 XP)
- **Benefit:** Simple and straightforward system

### 3. Multi-Category Word Handling

#### Scenario Example:
1. User learns "apple" in "Food" category → Award 10 XP (new word)
2. User learns "apple" in "Technology" category → Award 10 XP (new word)
3. User learns "apple" in "Food" category again → Award 1 XP (review)

#### Logic Flow:
```typescript
async isNewWordForUser(userId: string, vocabularyId: string): Promise<boolean> {
  // Chỉ kiểm tra UserVocabularyProgress - đơn giản và rõ ràng
  const progress = await this.repo.getProgressList(userId, [vocabularyId]);
  return !progress || progress.length === 0;
}
```

### 4. Files Modified

#### A. `learning.service.ts`
- Updated `calculateSR()` function to remove `learned` status
- Added `isNewWordForUser()` helper method with Option 1 logic
- Improved `updateVocabularyProgress()` logic
- Updated `getUserProgress()` to remove `learned` count

#### B. `learning.dto.ts`
- Removed `learned` field from `UserProgressDto`
- Removed `learned` field from `StudySetStatsDto`

#### C. `learning.repo.ts`
- Updated `getStudySetStats()` to count `review` instead of `learned`

### 5. Database Migration
- Created `migration-script.js` to update existing data
- Converts all `learned` status to `review` status

## How to Deploy

### 1. Deploy Code Changes
```bash
npm run build
npm start
```

### 2. Run Migration (if needed)
```bash
node migration-script.js
```

### 3. Verify Changes
- Check that statistics show only `review` and `mastered` counts
- Verify XP awards work correctly for new vs existing words
- Test learning flows work as expected
- Test same word in different categories

## Benefits

1. **Simplified Logic:** Only 2 statuses to manage
2. **Simple XP Tracking:** Based on progress record existence
3. **Multi-Category Support:** Allows same word in different categories
4. **Better User Experience:** Clear distinction between learning and mastered
5. **Maintainable Code:** Simple and straightforward logic

## Status Meanings

- **new:** Word not yet started (no record in UserVocabularyProgress)
- **review:** Word being learned/studied
- **mastered:** Word fully learned and retained

## XP Award Rules

- **No progress record:** 10 XP (new_word_learned)
- **Has progress record:** 1 XP (word_reviewed)
- **Mastered word:** 25 XP (mastered_word)

## Backward Compatibility

- Existing data will be migrated automatically
- API responses updated to reflect new structure
- Frontend may need updates to handle removed `learned` field
- Multi-category word handling is backward compatible 