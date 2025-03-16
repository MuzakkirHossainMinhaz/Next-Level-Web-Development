import { Schema, model } from "mongoose";
import { IAcademicSemester } from "./academicSemester.interface";
import { Months, SemesterCode, SemesterName } from "./academicSemester.constant";

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      required: [true, "Academic semester name is required"],
      enum: SemesterName,
    },
    code: {
      type: String,
      required: [true, "Academic semester code is required"],
      enum: SemesterCode,
    },
    year: {
      type: String,
      required: [true, "Academic semester year is required"],
    },
    startMonth: {
      type: String,
      required: [true, "Academic semester start month is required"],
      enum: Months,
    },
    endMonth: {
      type: String,
      required: [true, "Academic semester end month is required"],
      enum: Months,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new Error("Academic semester already exists");
  }

  next();
});

export const AcademicSemesterModel = model<IAcademicSemester>("AcademicSemester", academicSemesterSchema);
