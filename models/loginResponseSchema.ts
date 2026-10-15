import { z } from 'zod';

export const LoginResponseSchema = z.object({
    token: z.string(),
    user: z.object({
        id: z.number(),
        email: z.string(),
        firstName: z.string(),
        userType: z.string(),
        role: z.string()
    }),
    message: z.string()
});