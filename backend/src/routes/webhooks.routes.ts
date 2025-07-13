import express, { Router } from "express"
import { handleUserCreatedWebhook } from "@/controllers/weebhooks.controller";

const router: Router = express.Router();
/**
 * @swagger
 * /webhooks/user-created :
 *  post:
 *      summary: create user by clerk webhook call
 *      tags: [users]
 */
router.post("/webhooks/user-created", express.json(), handleUserCreatedWebhook);

export default router;