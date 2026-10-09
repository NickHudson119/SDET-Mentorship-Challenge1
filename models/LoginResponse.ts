export interface LoginResponse {
    token: string;
    user: {
        id: number;
        email: string;
        firstName: string;
        userType: string;
        role: string;
    }
    message: string;
}