import { Schema, model } from "mongoose";
import { StudentModel, IAddress, IGuardian, IName, IStudent } from "./student.interface";

const nameSchema = new Schema<IName>(
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

const addressSchema = new Schema<IAddress>(
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

const guardianSchema = new Schema<IGuardian>(
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
const studentSchema = new Schema<IStudent, StudentModel>( // for making custom static methods
  {
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      trim: true,
      maxlength: [10, "Student ID cannot be more than 10 characters"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      trim: true,
      maxlength: [10, "User ID cannot be more than 10 characters"],
      ref: "User",
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
      type: Date,
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester",
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: "AcademicDepartment",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

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

export const Student = model<IStudent, StudentModel>("Student", studentSchema);
