import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { AcademicDepartmentValidations } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";
const router = express.Router();

router.post(
  "/create-academic-department",
  requestValidator(AcademicDepartmentValidations.createAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get("/", AcademicDepartmentControllers.getAllAcademicDepartments);
router.get("/:academicDepartmentId", AcademicDepartmentControllers.getAcademicDepartmentById);
router.patch(
  "/:academicDepartmentId",
  requestValidator(AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.updateAcademicDepartmentById,
);

export const academicDepartmentRoutes = router;
