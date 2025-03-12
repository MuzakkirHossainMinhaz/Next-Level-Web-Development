/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const main = async () => {
    try {
        app.listen(config.port, () => {
            console.log(`🌐 Server is running on http://localhost:${config.port}`);
        });

        await mongoose
            .connect(`${config.database_url}`)
            .then(() => {
                console.log("⚡ Database connection successful");
            })
            .catch((error: Error) => {
                console.log(error);
            });
    } catch (error: unknown) {
        console.log(error);
    }
};

main();
