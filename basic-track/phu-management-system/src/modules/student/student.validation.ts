import { z } from "zod";

const createNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1)
    .max(25)
    .refine((data) => data.trim() !== "", {
      message: "First name is required",
    }),
  middleName: z.string().trim().max(25).optional(),
  lastName: z
    .string()
    .trim()
    .min(1)
    .max(25)
    .refine((data) => data.trim() !== "", {
      message: "Last name is required",
    }),
});

const createAddressValidationSchema = z.object({
  street: z
    .string()
    .trim()
    .min(1)
    .refine((data) => data.trim() !== "", {
      message: "Street is required",
    }),
  city: z
    .string()
    .trim()
    .min(1)
    .refine((data) => data.trim() !== "", { message: "City is required" }),
  state: z
    .string()
    .trim()
    .min(1)
    .refine((data) => data.trim() !== "", { message: "State is required" }),
});

const createGuardianValidationSchema = z.object({
  name: createNameValidationSchema.refine((data) => Object.values(data).some((value) => value.trim() !== ""), {
    message: "Guardian name is required",
  }),
  relationship: z
    .string()
    .trim()
    .refine((data) => data.trim() !== "", {
      message: "Relationship is required",
    }),
  contactNumber: z
    .string()
    .trim()
    .refine((data) => data.trim() !== "", {
      message: "Contact number is required",
    }),
  occupation: z
    .string()
    .trim()
    .refine((data) => data.trim() !== "", {
      message: "Occupation is required",
    }),
  address: createAddressValidationSchema.refine((data) => Object.values(data).every((value) => value.trim() !== ""), {
    message: "Guardian address is required",
  }),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).min(6),
    student: z.object({
      name: createNameValidationSchema.refine((data) => Object.values(data).some((value) => value.trim() !== ""), {
        message: "Name is required",
      }),
      age: z
        .number()
        .min(5)
        .refine((data) => data >= 5, {
          message: "Age cannot be less than 5",
        }),
      email: z
        .string()
        .trim()
        .email()
        .min(1)
        .max(30)
        .refine((data) => data.trim() !== "", {
          message: "Email is required",
        }),
      phone: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", {
          message: "Phone number is required",
        }),
      dateOfBirth: z.string().optional(),
      gender: z.enum(["male", "female", "other"]),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
      emergencyContactNumber: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", {
          message: "Emergency contact number is required",
        }),
      address: z
        .object({
          presentAddress: createAddressValidationSchema.refine(
            (data) => Object.values(data).every((value) => value.trim() !== ""),
            { message: "Present address is required" },
          ),
          permanentAddress: createAddressValidationSchema.refine(
            (data) => Object.values(data).every((value) => value.trim() !== ""),
            { message: "Permanent address is required" },
          ),
        })
        .refine(
          (data) =>
            Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
          { message: "Address is required" },
        ),
      guardian: createGuardianValidationSchema.refine(
        (data) =>
          Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
        { message: "Guardian is required" },
      ),
      localGuardian: createGuardianValidationSchema.refine(
        (data) =>
          Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
        { message: "Local guardian is required" },
      ),
      avatar: z.string(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1)
    .max(25)
    .refine((data) => data.trim() !== "", {
      message: "First name is required",
    })
    .optional(),
  middleName: z.string().trim().max(25).optional(),
  lastName: z
    .string()
    .trim()
    .min(1)
    .max(25)
    .refine((data) => data.trim() !== "", {
      message: "Last name is required",
    })
    .optional(),
});

const updateAddressValidationSchema = z.object({
  street: z
    .string()
    .trim()
    .min(1)
    .refine((data) => data.trim() !== "", {
      message: "Street is required",
    })
    .optional(),
  city: z
    .string()
    .trim()
    .min(1)
    .refine((data) => data.trim() !== "", { message: "City is required" })
    .optional(),
  state: z
    .string()
    .trim()
    .min(1)
    .refine((data) => data.trim() !== "", { message: "State is required" })
    .optional(),
});

const updateGuardianValidationSchema = z.object({
  name: updateNameValidationSchema
    .refine((data) => Object.values(data).some((value) => value.trim() !== ""), {
      message: "Guardian name is required",
    })
    .optional(),
  relationship: z
    .string()
    .trim()
    .refine((data) => data.trim() !== "", {
      message: "Relationship is required",
    })
    .optional(),
  contactNumber: z
    .string()
    .trim()
    .refine((data) => data.trim() !== "", {
      message: "Contact number is required",
    })
    .optional(),
  occupation: z
    .string()
    .trim()
    .refine((data) => data.trim() !== "", {
      message: "Occupation is required",
    })
    .optional(),
  address: updateAddressValidationSchema
    .refine((data) => Object.values(data).every((value) => value.trim() !== ""), {
      message: "Guardian address is required",
    })
    .optional(),
});

// Zod validation schema for the Student model
const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateNameValidationSchema
        .refine((data) => Object.values(data).some((value) => value.trim() !== ""), { message: "Name is required" })
        .optional(),
      age: z
        .number()
        .min(5)
        .refine((data) => data >= 5, {
          message: "Age cannot be less than 5",
        })
        .optional(),
      email: z
        .string()
        .trim()
        .email()
        .min(1)
        .max(30)
        .refine((data) => data.trim() !== "", {
          message: "Email is required",
        })
        .optional(),
      phone: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", {
          message: "Phone number is required",
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      gender: z.enum(["male", "female", "other"]).optional(),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
      emergencyContactNumber: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", {
          message: "Emergency contact number is required",
        })
        .optional(),
      address: z
        .object({
          presentAddress: updateAddressValidationSchema.refine(
            (data) => Object.values(data).every((value) => value.trim() !== ""),
            { message: "Present address is required" },
          ),
          permanentAddress: updateAddressValidationSchema.refine(
            (data) => Object.values(data).every((value) => value.trim() !== ""),
            { message: "Permanent address is required" },
          ),
        })
        .refine(
          (data) =>
            Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
          { message: "Address is required" },
        )
        .optional(),
      guardian: updateGuardianValidationSchema
        .refine(
          (data) =>
            Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
          { message: "Guardian is required" },
        )
        .optional(),
      localGuardian: updateGuardianValidationSchema
        .refine(
          (data) =>
            Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
          { message: "Local guardian is required" },
        )
        .optional(),
      avatar: z.string().optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const StudentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
