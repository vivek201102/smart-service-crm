import { Request, Response, NextFunction } from "express";
import { z, ZodType } from "zod";

export const validateRequest = <T extends ZodType<any, any>>(schema: T) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: result.error.issues,
            });
        }

        req.body = result.data; // validated + typed data
        next();
        return;
    };
