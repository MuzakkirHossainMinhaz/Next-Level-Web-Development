import express from "express";
import { StudentControllers } from "./student.controller";
const router = express.Router();

// create student
router.post("/create-student", StudentControllers.createStudent); // call the controller function
router.get("/", StudentControllers.getAllStudents);
router.get("/:studentId", StudentControllers.getStudentByStudentId);
router.delete("/:studentId", StudentControllers.deleteStudentByStudentId);

export const studentRoutes = router;
