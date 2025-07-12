import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { responseWrapper } from "@/middleware/responseWrapper"
import { errorHandler } from "@/middleware/errorHandler"
import { logger } from "@/utils/logger"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(responseWrapper);

app.get("/api/health", (req, res) => {
    res.send({ status: "Backend is up and running 🚀" });
})

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    logger.info(`Server is running: http://locolhost:${process.env.PORT || 5000}`)
})