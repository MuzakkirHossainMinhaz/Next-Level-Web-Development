import { z } from "zod";

// Zod validation schema for the Name sub-document
const nameZodSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1)
        .max(25)
        .refine((data) => data.trim() !== "", { message: "First name is required" }),
    middleName: z.string().trim().max(25).optional(),
    lastName: z
        .string()
        .trim()
        .min(1)
        .max(25)
        .refine((data) => data.trim() !== "", { message: "Last name is required" }),
});

// Zod validation schema for the Address sub-document
const addressZodSchema = z.object({
    street: z
        .string()
        .trim()
        .min(1)
        .refine((data) => data.trim() !== "", { message: "Street is required" }),
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

// Zod validation schema for the Guardian sub-document
const guardianZodSchema = z.object({
    name: nameZodSchema.refine((data) => Object.values(data).some((value) => value.trim() !== ""), {
        message: "Guardian name is required",
    }),
    relationship: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", { message: "Relationship is required" }),
    contactNumber: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", { message: "Contact number is required" }),
    occupation: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", { message: "Occupation is required" }),
    address: addressZodSchema.refine((data) => Object.values(data).every((value) => value.trim() !== ""), {
        message: "Guardian address is required",
    }),
});

// Zod validation schema for the Student model
const studentZodSchema = z.object({
    studentId: z
        .string()
        .trim()
        .min(1)
        .max(10)
        .refine((data) => data.trim() !== "", { message: "Student ID is required" }),
    password: z
        .string()
        .trim()
        .min(6)
        .max(20)
        .refine((data) => data.trim() !== "", { message: "Password is required" }),
    name: nameZodSchema.refine((data) => Object.values(data).some((value) => value.trim() !== ""), {
        message: "Name is required",
    }),
    age: z
        .number()
        .min(5)
        .refine((data) => data >= 5, { message: "Age cannot be less than 5" }),
    email: z
        .string()
        .trim()
        .email()
        .min(1)
        .max(30)
        .refine((data) => data.trim() !== "", { message: "Email is required" }),
    phone: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", { message: "Phone number is required" }),
    dateOfBirth: z
        .string()
        .trim()
        .min(1)
        .refine((data) => data.trim() !== "", { message: "Date of birth is required" }),
    gender: z.enum(["male", "female", "other"]),
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
    emergencyContactNumber: z
        .string()
        .trim()
        .refine((data) => data.trim() !== "", { message: "Emergency contact number is required" }),
    address: z
        .object({
            presentAddress: addressZodSchema.refine(
                (data) => Object.values(data).every((value) => value.trim() !== ""),
                { message: "Present address is required" },
            ),
            permanentAddress: addressZodSchema.refine(
                (data) => Object.values(data).every((value) => value.trim() !== ""),
                { message: "Permanent address is required" },
            ),
        })
        .refine(
            (data) =>
                Object.values(data).every((value) =>
                    Object.values(value).every((innerValue) => innerValue.trim() !== ""),
                ),
            { message: "Address is required" },
        ),
    guardian: guardianZodSchema.refine(
        (data) =>
            Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
        { message: "Guardian is required" },
    ),
    localGuardian: guardianZodSchema.refine(
        (data) =>
            Object.values(data).every((value) => Object.values(value).every((innerValue) => innerValue.trim() !== "")),
        { message: "Local guardian is required" },
    ),
    avatar: z.string(),
    isActive: z.enum(["active", "inactive"]).default("active"),
    isDeleted: z.boolean().default(false),
});

export default studentZodSchema;
