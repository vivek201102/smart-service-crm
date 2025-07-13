import { emailAddresses } from "@clerk/clerk-sdk-node";
import z from "zod";

export const createUserRequest = z.object({
    id: z.string().min(1, "Id is required"),
    email_addresses: z.array(
        z.object({
            email_address: z.email('Invalid email address').min(1, "Email address is required")
        })
    ).min(1, "At least one email address is required"),
    first_name: z.string().min(1, "Firstname is required"),
    last_name: z.string().min(1, "Lastname is required")
})