export interface UserModelInterface {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

export interface CreateUserInterface {
    first_name: string;
    last_name: string;
    email: string;
}

export interface Pagination {
    page?: string;
    limit?: string;
  }
