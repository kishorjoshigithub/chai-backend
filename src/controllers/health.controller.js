import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiErrors.js";

const healthCheck = asyncHandler(async (req, res, next) => {
  return res.status(200).json(new ApiResponse(200, "Backend is working..."));
});

export { healthCheck };
