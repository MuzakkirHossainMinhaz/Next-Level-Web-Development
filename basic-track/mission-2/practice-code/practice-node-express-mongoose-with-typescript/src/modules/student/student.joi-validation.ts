import Joi from "joi";

// Joi validation schema for the Name sub-document
const nameJoiSchema = Joi.object({
    firstName: Joi.string().trim().required().max(25).label("First name"),
    middleName: Joi.string().trim().max(25).label("Middle name"),
    lastName: Joi.string().trim().required().max(25).label("Last name"),
});

// Joi validation schema for the Address sub-document
const addressJoiSchema = Joi.object({
    street: Joi.string().trim().required().label("Street"),
    city: Joi.string().trim().required().label("City"),
    state: Joi.string().trim().required().label("State"),
});

// Joi validation schema for the Guardian sub-document
const guardianJoiSchema = Joi.object({
    name: nameJoiSchema.required().label("Guardian name"),
    relationship: Joi.string().trim().required().label("Relationship"),
    contactNumber: Joi.string().trim().required().label("Contact number"),
    occupation: Joi.string().trim().required().label("Occupation"),
    address: addressJoiSchema.required().label("Guardian address"),
});

// Joi validation schema for the Student model
const studentJoiSchema = Joi.object({
    studentId: Joi.string().trim().required().max(10).label("Student ID"),
    name: nameJoiSchema.required().label("Student name"),
    age: Joi.number().required().min(5).label("Age"),
    email: Joi.string().trim().lowercase().email().required().max(30).label("Email"),
    phone: Joi.string().trim().required().label("Phone number"),
    dateOfBirth: Joi.string().trim().required().label("Date of birth"),
    gender: Joi.string().trim().valid("male", "female", "other").required().label("Gender"),
    bloodGroup: Joi.string().trim().valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-").label("Blood group"),
    emergencyContactNumber: Joi.string().trim().required().label("Emergency contact number"),
    address: Joi.object({
        presentAddress: addressJoiSchema.required().label("Present address"),
        permanentAddress: addressJoiSchema.required().label("Permanent address"),
    })
        .required()
        .label("Address"),
    guardian: guardianJoiSchema.required().label("Guardian"),
    localGuardian: guardianJoiSchema.required().label("Local guardian"),
    avatar: Joi.string().label("Avatar"),
    isActive: Joi.string().valid("active", "inactive").default("active").trim().label("Status"),
});

export default studentJoiSchema;
