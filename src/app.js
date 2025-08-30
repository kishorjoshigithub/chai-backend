import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ENV from "./config/env";

const app = express();

// middlewares
app.use(
  cors({
    origin: `${ENV.CORS_ORIGIN}`,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export default app;
