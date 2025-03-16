import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be less than 50 characters" }),
    shortName: z
      .string({
        required_error: "Short name is required",
      })
      .min(2, { message: "Short name must be at least 3 characters" })
      .max(50, { message: "Short name must be less than 50 characters" }),
    academicFaculty: z
      .string({
        required_error: "Academic Faculty is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be less than 50 characters" }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be less than 50 characters" })
      .optional(),
    shortName: z
      .string({
        required_error: "Short name is required",
      })
      .min(2, { message: "Short name must be at least 3 characters" })
      .max(50, { message: "Short name must be less than 50 characters" })
      .optional(),
    academicFaculty: z
      .string({
        required_error: "Academic faculty is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be less than 50 characters" })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
