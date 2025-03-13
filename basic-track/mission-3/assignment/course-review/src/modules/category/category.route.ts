import { Router } from "express";
import checkValidation from "../../middlewares/checkValidation";
import categoryValidationSchema from "./category.validation";
import { CategoryControllers } from "./category.controller";

const router = Router();

router.post("/", checkValidation(categoryValidationSchema), CategoryControllers.createCategory);
router.get("/", CategoryControllers.getAllCategories);

export const CategoryRoutes = router;
