import { CreateUserRequest } from "@/models/user.models";
import { userService } from "@/services/user.services";
import { logger } from "@/utils/logger";
import { Request, Response } from "express"

export const handleUserCreatedWebhook = async (
    req: Request,
    res: Response
) => {
    try {
        const { id, email_addresses, first_name, last_name } = req.body.data;
        const request : CreateUserRequest = {
            clerkId: id,
            email: email_addresses[0]?.email_address,
            name: `${first_name ?? ""} ${last_name ?? ""}`.trim()
        };
        const response = await userService.createUser(request);
        return res.status(201).json(response);
    }
    catch(err){
        return res.status(500).json(err)
    }
}