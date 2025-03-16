import express from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import requestValidator from "../../middlewares/requestValidator";
import { AcademicFacultyValidations } from "./academicFaculty.validation";
const router = express.Router();

router.post(
  "/create-academic-faculty",
  requestValidator(AcademicFacultyValidations.createAcademicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get("/", AcademicFacultyControllers.getAllAcademicFaculties);
router.get("/:academicFacultyId", AcademicFacultyControllers.getAcademicFacultyById);
router.patch(
  "/:academicFacultyId",
  requestValidator(AcademicFacultyValidations.updateAcademicFacultyValidationSchema),
  AcademicFacultyControllers.updateAcademicFacultyById,
);

export const academicFacultyRoutes = router;
