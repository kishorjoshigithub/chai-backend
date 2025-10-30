import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import errorHandler from "./middlewares/errors.middleware.js";

const app = express();

// middlewares
app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(errorHandler);

//Routes import
import userRouter from "./routes/user.routes.js";
import healthRouter from "./routes/health.routes.js";
import { errorHandler } from "./middlewares/errors.middleware.js";

//Routes declearation
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/users", userRouter);

export default app;
