import { IS_DEV } from "@/config/env";
import { errorResponse } from "@/utils/apiResponse";
import { logger } from "@/utils/logger";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    
    logger.error(`[${req.method}] ${req.originalUrl} - ${message}`, err)

    if(IS_DEV){
        return res.status(status).json(
            errorResponse(
                message,
                status,
                {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                    errors: err.errors || null
                }
            )
        );
    }

    return res.status(status).json(errorResponse(message, status, err.errors || null));
}