/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import notFound from "./middlewares/notFound";
import router from "./routes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// application routes
app.use("/api/v1", router);

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.Js, Express.Js, Mongoose with Typescript server!");
});

// not found route
app.use(notFound);

// error handler
app.use(errorHandler);

export default app;
