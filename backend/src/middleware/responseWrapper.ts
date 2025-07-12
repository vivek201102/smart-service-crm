import { NextFunction, Request, Response  } from "express";

export const responseWrapper = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const oldJson = res.json.bind(res);
    res.json = function (data: any) {
        if (data && data.success !== undefined) {
            return oldJson(data);
        } else {
            const statusCode = res.statusCode;
            return oldJson.call(this, {
                status: statusCode,
                success: statusCode < 400,
                message: statusCode < 400 ? "Success" : "Error",
                data
            });
        }
    };
    next();
}