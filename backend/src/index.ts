import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", (req, res) => {
    res.send({ status: "Backend is up and running 🚀" });
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`)
})