import winston from "winston";
import path from "path";
import { IS_DEV } from "@/config/env";
import fs from "fs";


const logDir = path.join("logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFormat = winston.format.printf(({ timestamp, level, message, stack }) => {
    return `[${timestamp}] [${level.toUpperCase()}]: ${stack || message}`;
});

export const logger = winston.createLogger({
    level: "info", // minimum level to log
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        logFormat
    ),
    transports: [
        // Console output (dev only)
        ...(IS_DEV
            ? [new winston.transports.Console()]
            : []),

        new winston.transports.File({
            filename: path.join(logDir, "info.log"),
            level: "info",
        }),

        new winston.transports.File({
            filename: path.join(logDir, "warn.log"),
            level: "warn",
        }),

        new winston.transports.File({
            filename: path.join(logDir, "error.log"),
            level: "error",
        }),
    ],
});