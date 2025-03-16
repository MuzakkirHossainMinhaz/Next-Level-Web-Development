import { Schema, model } from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.iterface";

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const AcademicFacultyModel = model<IAcademicFaculty>("AcademicFaculty", academicFacultySchema);
