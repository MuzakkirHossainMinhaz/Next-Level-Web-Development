import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { studentRoutes } from "../modules/student/student.route";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { academicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
const router = Router();

router.use("/users", userRoutes);
router.use("/students", studentRoutes);
router.use("/academic-semesters", academicSemesterRoutes);
router.use("/academic-faculties", academicFacultyRoutes);
router.use("/academic-departments", academicDepartmentRoutes);

export default router;
