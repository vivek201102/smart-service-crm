import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { responseWrapper } from "@/middleware/responseWrapper"
import { errorHandler } from "@/middleware/errorHandler"
import { logger } from "@/utils/logger"
import webhookRouter from "./routes/webhooks.routes"
import { swaggerSpec, swaggerUi } from "./config/swagger"
import { authenticateUser } from "./middleware/auth.middleware"
import { clerkMiddleware } from "@clerk/express"

dotenv.config()
const app = express()

app.use(cors())
app.use(clerkMiddleware())
app.use(express.json())
app.use(responseWrapper);

app.get("/api/health", (req, res) => {
    res.send({ status: "Backend is up and running 🚀" });
})

app.use("/api/webhooks", webhookRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    logger.info(`Server is running: http://locolhost:${process.env.PORT || 5000}`)
})