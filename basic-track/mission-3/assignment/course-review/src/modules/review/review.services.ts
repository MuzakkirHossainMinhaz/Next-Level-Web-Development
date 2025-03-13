import { IReview } from "./review.interface";
import { ReviewModel } from "./review.model";

const createReview = async (payload: IReview) => {
  const review = await ReviewModel.create(payload);
  return review;
};

export const ReviewServices = { createReview };
