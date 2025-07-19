import { Exclude } from "class-transformer";

export class UserModel {
    id: string;
    email: string;
    name: string;
    @Exclude() password: string;
    avatarUrl?: string;
    level: number;
    xp: number;
    streak: number;
    totalWordsLearned: number;
    dailyGoal: number;
    difficultyPreference: string;
    notificationsEnabled: boolean;
    publicProfile: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<UserModel>) {
        Object.assign(this, partial);
    }
}