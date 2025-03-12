import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRoutes } from "./modules/student/student.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// application routes
app.use("/api/v1/students", studentRoutes);

// root route
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Node.Js, Express.Js, Mongoose with Typescript server!");
});

export default app;
