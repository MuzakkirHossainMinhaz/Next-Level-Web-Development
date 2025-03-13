import { Router } from "express";
import checkValidation from "../../middlewares/checkValidation";
import { CourseControllers } from "./course.controller";
import { courseValidationSchemas } from "./course.validation";

const router = Router();

router.post("/course", checkValidation(courseValidationSchemas.createCourseSchema), CourseControllers.createCourse);
router.get("/courses", CourseControllers.getAllCourses);
router.put(
  "/courses/:courseId",
  checkValidation(courseValidationSchemas.updateCourseSchema),
  CourseControllers.updateCourseById,
);
router.get("/courses/:courseId/reviews", CourseControllers.getCourseByIdWithReviews);
router.get("/course/best", CourseControllers.getBestCourse);

export const CourseRoutes = router;
