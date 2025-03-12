import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { StudentModel, TAddress, TGuardian, TName, TStudent } from "./student.interface";
import config from "../../config";

const nameSchema = new Schema<TName>(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
            maxlength: [25, "First name cannot be more than 30 characters"],
        },
        middleName: {
            type: String,
            trim: true,
            maxlength: [25, "Middle name cannot be more than 30 characters"],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true,
            maxlength: [25, "Last name cannot be more than 30 characters"],
        },
    },
    {
        _id: false,
    },
);

const addressSchema = new Schema<TAddress>(
    {
        street: {
            type: String,
            required: [true, "Street is required"],
            trim: true,
        },
        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
        },
        state: {
            type: String,
            required: [true, "State is required"],
            trim: true,
        },
    },
    {
        _id: false,
    },
);

const guardianSchema = new Schema<TGuardian>(
    {
        name: nameSchema,
        relationship: {
            type: String,
            required: [true, "Relationship is required"],
        },
        contactNumber: {
            type: String,
            required: [true, "Contact number is required"],
        },
        occupation: {
            type: String,
            required: [true, "Occupation is required"],
        },
        address: addressSchema,
    },
    {
        _id: false,
    },
);

// const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>( // for making custom instance methods
const studentSchema = new Schema<TStudent, StudentModel>( // for making custom static methods
    {
        studentId: {
            type: String,
            required: [true, "Student ID is required"],
            unique: true,
            trim: true,
            maxlength: [10, "Student ID cannot be more than 10 characters"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            trim: true,
            maxlength: [20, "Password cannot be more than 20 characters"],
        },
        name: {
            type: nameSchema,
            required: [true, "Name is required"],
        },
        age: {
            type: Number,
            required: [true, "Age is required"],
            min: [5, "Age cannot be less than 5"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
            maxlength: [30, "Email cannot be more than 30 characters"],
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            unique: true,
            trim: true,
        },
        dateOfBirth: {
            type: String,
            required: [true, "Date of birth is required"],
            trim: true,
        },
        gender: {
            type: String,
            enum: {
                values: ["male", "female", "other"],
                message: "Gender must be male, female or other",
            },
            required: [true, "Gender is required"],
            trim: true,
        },
        bloodGroup: {
            type: String,
            enum: {
                values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                message: "Blood group must be A+, A-, B+, B-, AB+, AB-, O+ or O-",
            },
            trim: true,
        },
        emergencyContactNumber: {
            type: String,
            required: [true, "Emergency contact number is required"],
            trim: true,
        },
        address: {
            presentAddress: {
                type: addressSchema,
                required: [true, "Present address is required"],
            },
            permanentAddress: {
                type: addressSchema,
                required: [true, "Permanent address is required"],
            },
        },
        guardian: {
            type: guardianSchema,
            required: [true, "Guardian is required"],
        },
        localGuardian: {
            type: guardianSchema,
            required: [true, "Local guardian is required"],
        },
        avatar: String,
        isActive: {
            type: String,
            enum: {
                values: ["active", "inactive"],
                message: "Status must be active or inactive",
            },
            default: "active",
            trim: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

/** pre save hook */
studentSchema.pre("save", async function (next) {
    // hashing password and saving
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds));

    next();
});

/** post save hook */
studentSchema.post("save", async function (doc, next) {
    doc.password = "***********";

    next();
});

/** pre find hook */
studentSchema.pre("find", async function (next) {
    this.where({ isDeleted: false });
    next();
});

/** pre findOne hook */
studentSchema.pre("findOne", async function (next) {
    this.where({ isDeleted: false });
    next();
});

/** for making custom static methods */
studentSchema.statics.isStudentExists = async function (studentId: string) {
    const student = await this.findOne({ studentId });
    return student;
};

/** for making custom instance methods */
// studentSchema.methods.isStudentExists = async function (studentId: string) {
//     const student = await Student.findOne({ studentId });
//     return student;
// }

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
