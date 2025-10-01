import { z } from "zod";

export const contactFormSchema = z.object({
    full_name: z.string().min(1).min(3).max(256),
    email: z.string(),
    phone: z.string(),
    company: z.string().min(1).optional(),
    message: z.string()
});