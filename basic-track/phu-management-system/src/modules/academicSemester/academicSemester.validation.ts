import { z } from "zod";
import { Months, SemesterCode, SemesterName } from "./academicSemester.constant";

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...SemesterName] as [string, ...string[]], {
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    code: z.enum([...SemesterCode] as [string, ...string[]], {
      required_error: "Code is required",
      invalid_type_error: "Code must be a string",
    }),
    year: z.string({
      required_error: "Year is required",
      invalid_type_error: "Year must be a string",
    }),
    startMonth: z.enum([...Months] as [string, ...string[]], {
      required_error: "Start month is required",
      invalid_type_error: "Start month must be a string",
    }),
    endMonth: z.enum([...Months] as [string, ...string[]], {
      required_error: "End month is required",
      invalid_type_error: "End month must be a string",
    }),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...SemesterName] as [string, ...string[]], {
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .optional(),
    code: z
      .enum([...SemesterCode] as [string, ...string[]], {
        required_error: "Code is required",
        invalid_type_error: "Code must be a string",
      })
      .optional(),
    year: z
      .string({
        required_error: "Year is required",
        invalid_type_error: "Year must be a string",
      })
      .optional(),
    startMonth: z
      .enum([...Months] as [string, ...string[]], {
        required_error: "Start month is required",
        invalid_type_error: "Start month must be a string",
      })
      .optional(),
    endMonth: z
      .enum([...Months] as [string, ...string[]], {
        required_error: "End month is required",
        invalid_type_error: "End month must be a string",
      })
      .optional(),
  }),
});

export const academicSemesterValidations = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
