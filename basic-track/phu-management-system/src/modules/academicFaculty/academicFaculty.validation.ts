import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be less than 50 characters" }),
    code: z
      .string({
        required_error: "Code is required",
      })
      .min(3, { message: "Code must be at least 3 characters" })
      .max(10, { message: "Code must be less than 10 characters" }),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be less than 50 characters" })
      .optional(),
    code: z
      .string({
        required_error: "Code is required",
      })
      .min(3, { message: "Code must be at least 3 characters" })
      .max(10, { message: "Code must be less than 10 characters" })
      .optional(),
  }),
});

export const AcademicFacultyValidations = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
