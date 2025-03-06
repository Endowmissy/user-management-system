export interface PostModelInterface {
    id: string;
    user_id: string;
    title: string;
    body: string;
    created_at: Date;
    updated_at: Date;
}

export interface CreatePostInterface {
    user_id: string;
    title: string;
    body: string;
}
