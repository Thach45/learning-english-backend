export class PostModel {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<PostModel>) {
        Object.assign(this, partial);
    }
}