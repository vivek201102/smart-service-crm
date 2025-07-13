import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express"
import { userService } from "@/services/user.services";
import { logger } from "@/utils/logger";

export const clerkAuthMiddleware = ClerkExpressWithAuth({
    onError: (error: any) => {
        console.error('Clerk auth error:', error);
        return {
            success: false,
            message: "Unauthorized"
        };
    }
});

export const authenticateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userId } = getAuth(req)
        logger.info(`UserId: ${userId}`)
        if(!userId)
            return res.status(401).json("You are not authorized user.")
        
        const user = await userService.getUserByClerkId(userId);
        
        
        if(!user)
            return res.status(401).json("You are registered in the system.")
        req.user = user;
        next();
        return;
    }
    catch (err) {
        logger.error(err)
        return res.status(500).json(err)
    }
}