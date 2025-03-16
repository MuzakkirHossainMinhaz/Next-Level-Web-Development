import express from "express";
import { StudentControllers } from "./student.controller";
import requestValidator from "../../middlewares/requestValidator";
import { StudentValidations } from "./student.validation";
const router = express.Router();

router.get("/", StudentControllers.getAllStudents);
router.get("/:studentId", StudentControllers.getStudentByStudentId);
router.patch(
  "/:studentId",
  requestValidator(StudentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudentByStudentId,
);
router.delete("/:studentId", StudentControllers.deleteStudentByStudentId);

export const studentRoutes = router;
