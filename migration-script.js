// Migration script to update existing 'learned' status to 'review'
// Run this script after deploying the updated code

const { PrismaClient } = require('./generated/prisma');

const prisma = new PrismaClient();

async function migrateLearnedToReview() {
  try {
    console.log('Starting migration: learned -> review status...');
    
    // Update all records with status 'learned' to 'review'
    const result = await prisma.userVocabularyProgress.updateMany({
      where: {
        status: 'learned'
      },
      data: {
        status: 'review'
      }
    });
    
    console.log(`Migration completed! Updated ${result.count} records.`);
    
    // Verify the migration
    const learnedCount = await prisma.userVocabularyProgress.count({
      where: { status: 'learned' }
    });
    
    const reviewCount = await prisma.userVocabularyProgress.count({
      where: { status: 'review' }
    });
    
    console.log(`Verification: ${learnedCount} records with 'learned' status remaining`);
    console.log(`Verification: ${reviewCount} records with 'review' status`);
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateLearnedToReview(); 