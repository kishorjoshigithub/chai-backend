import connectDB from "./db/db.js";
import app from "./app.js";
import ENV from "./config/env.js";

connectDB()
  .then(() => {
    app.listen(ENV.PORT, () => {
      console.log(
        `Server is running on port ${ENV.PORT} at http://localhost:${ENV.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
    process.exit(1);
  });
