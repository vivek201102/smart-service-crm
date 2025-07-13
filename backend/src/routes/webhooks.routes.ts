import express, { Router } from "express"
import { handleUserCreatedWebhook } from "@/controllers/weebhooks.controller";
import { validateRequest } from "@/middleware/validateRequest.middleware";
import { createUserRequest } from "@/validations/user.schema";

const router: Router = express.Router();
/**
 * @swagger
 * /webhooks/user-created :
 *  post:
 *      summary: create user by clerk webhook call
 *      tags: [users]
 */
router.post("/user-created", express.json(), validateRequest(createUserRequest), handleUserCreatedWebhook);

export default router;