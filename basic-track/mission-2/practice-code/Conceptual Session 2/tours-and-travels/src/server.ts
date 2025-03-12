/* eslint-disable no-console */
import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";

dotenv.config();

async function server() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`).then(() => {
      console.log("Database connected successfully");
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server().catch((err) => {
  console.log(err);
});
