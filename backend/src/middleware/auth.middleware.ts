import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";

export const clerkAuthMiddleware = ClerkExpressWithAuth({
    onError: (error: any) => {
        console.error('Clerk auth error:', error);
        return {
            success: false,
            message: "Unauthorized"
        };
    }
});