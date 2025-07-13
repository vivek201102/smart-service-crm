import { Role } from "@/generated/prisma";

export type CreateUserRequest = {
    clerkId: string;
    name: string;
    email: string;
}