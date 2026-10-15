import { z } from 'zod';

export const VerifyResponseSchema = z.object({
        valid: z.boolean(),
        user: z.object({
        id: z.number(),
        email: z.string(),
        firstName: z.string(),
        userType: z.string(),
        role: z.string(),
        emailVerified: z.boolean(),
        marketingOptIn: z.boolean(),
        createdAt: z.number()
    })
});