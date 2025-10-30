import mongoose from "mongoose";
import ApiError from "../utils/ApiError.js";

export const errorHandler = (err, req, res, next) => {
  // Only handle in development mode
  if (process.env.NODE_ENV !== "development") {
    return next(err); // Let Express or another middleware handle it
  }

  let error = err;

  if (!(error instanceof ApiError)) {
    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors).map((val) => val.message);
      error = new ApiError(messages.join(", "), 400);
    } else if (error.code && error.code === 11000) {
      const message = `Duplicate field value entered for ${Object.keys(error.keyValue).join(", ")}`;
      error = new ApiError(message, 400);
    } else {
      error = new ApiError(
        error.message || "Internal Server Error",
        error.statusCode || 500
      );
    }
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }), // show stack only in dev
  });
};

export default errorHandler;
