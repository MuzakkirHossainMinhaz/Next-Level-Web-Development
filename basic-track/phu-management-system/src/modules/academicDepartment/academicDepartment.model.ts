import { Schema, model } from "mongoose";
import { IAcademicDepartment } from "./academicDepartment.interface";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    shortName: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

academicDepartmentSchema.pre("save", async function (next) {
  const isDeparmentExist = await AcademicDepartmentModel.findOne({ name: this.name });

  if (isDeparmentExist) {
    throw new Error("Department already exist");
  }

  next();
});

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();

  const isDeparmentExist = await AcademicDepartmentModel.findOne(query);

  if (!isDeparmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Department does not exist");
  }
  next();
});

export const AcademicDepartmentModel = model<IAcademicDepartment>("AcademicDepartment", academicDepartmentSchema);
