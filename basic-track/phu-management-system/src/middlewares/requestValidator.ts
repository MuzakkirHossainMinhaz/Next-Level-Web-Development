import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";

const requestValidator = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({ body: req.body });
      return next();
    } catch (error) {
      next(error);
    }
  };
};

export default requestValidator;
