import {z} from "zod";

export const createRoleRequestSchema = z.object({
    requestedRole: z.enum(["agent", "customer", "org_admin", "admin"]),
    reason: z.string().min(5, "Reason must be at least 5 characters")
})