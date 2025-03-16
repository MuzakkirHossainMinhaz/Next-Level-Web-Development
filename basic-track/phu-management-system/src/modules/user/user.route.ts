import express from "express";
import { UserControllers } from "./user.controller";
import { StudentValidations } from "../student/student.validation";
import requestValidator from "../../middlewares/requestValidator";
const router = express.Router();

router.post(
  "/create-student",
  requestValidator(StudentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const userRoutes = router;
