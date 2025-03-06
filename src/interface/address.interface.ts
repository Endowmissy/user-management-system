export interface AddressModelInterface {
    id: string;
    user_id: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    created_at: Date;
    updated_at: Date;
}

export interface CreateAddressInterface {
    user_id: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
}
export interface UpdateAdressInterface {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zip_code?: string;
}
