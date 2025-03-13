import { Router } from "express";
import checkValidation from "../../middlewares/checkValidation";
import reviewValidationSchema from "./review.validation";
import { ReviewControllers } from "./review.controller";

const router = Router();

router.post("/", checkValidation(reviewValidationSchema), ReviewControllers.createReview);

export const ReviewRoutes = router;
