import { ICategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createCategory = async (payload: ICategory) => {
  const category = await CategoryModel.create(payload);
  return category;
};

const getAllCategories = async () => {
  const categories = await CategoryModel.find();
  return categories;
};

export const CategoryServices = {
  createCategory,
  getAllCategories,
};
