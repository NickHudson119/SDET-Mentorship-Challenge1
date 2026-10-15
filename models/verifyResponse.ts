export interface VerifyResponse {
    valid: boolean;
    user: {
        id: number;
        email: string;
        firstName: string;
        userType: string;
        role: string;
        emailVerfied: boolean;
        marketingOptIn: boolean;
        creadtedAt: number;
    };
}