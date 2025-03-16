import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import requestValidator from "../../middlewares/requestValidator";
import { academicSemesterValidations } from "./academicSemester.validation";
const router = express.Router();

router.post(
  "/create-semester",
  requestValidator(academicSemesterValidations.createAcademicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get("/", AcademicSemesterControllers.getAllSemesters);
router.get("/:semesterId", AcademicSemesterControllers.getSemesterById);
router.patch(
  "/:semesterId",
  requestValidator(academicSemesterValidations.updateAcademicSemesterValidationSchema),
  AcademicSemesterControllers.updateSemesterById,
);

export const academicSemesterRoutes = router;
