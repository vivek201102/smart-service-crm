import { Role } from "@/generated/prisma"
import { prisma } from "@/lib/prisma"
import { CreateUserRequest } from "@/models/user.models"
import { logger } from "@/utils/logger"

export const userService = {
    createUser: async (
        req: CreateUserRequest
    ) => {
        const existingUser = await prisma.user.findUnique({ where: { clerkId: req.clerkId } })

        if(existingUser) return existingUser;
        
        return await prisma.user.create({
            data: {
                clerkId: req.clerkId,
                email: req.email,
                name: req.name,
                role: Role.unverified
            }
        })
    },

    getUserByClerkId: async (
        clerkId: string
    ) => {
        return prisma.user.findUnique({ where: { clerkId } })
    }
}