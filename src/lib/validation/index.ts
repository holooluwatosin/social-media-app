import * as z from "zod"

export const SignupValidation = z.object({
    firstName: z.string().min(2, {message: "First name is too short"}),
    lastName: z.string().min(2, {message: "Last name is too short"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}),
    // username: z.string().min(2).max(50),
})
