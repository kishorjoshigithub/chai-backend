import connectDB from "./db/db.js";
import app from "./app.js";
import "dotenv/config";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port ${process.env.PORT} at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
    process.exit(1);
  });
