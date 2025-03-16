import mongoose from "mongoose";
import config from "../../config";
import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createStudent = async (password: string, payload: IStudent) => {
  // user object
  const userData: Partial<IUser> = {};

  // generate userId
  const admissionSemester = await AcademicSemesterModel.findById(payload.admissionSemester);
  userData.userId = await generateStudentId(admissionSemester as IAcademicSemester);

  // if password is not given then use default password
  userData.password = password || (config.default_password as string);

  // set role
  userData.role = "student";

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    // create user
    const newUser = await User.create([userData], { session });

    if (!newUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    } else {
      payload.studentId = newUser[0].userId;
      payload.userId = newUser[0]._id; // reference id

      // create student
      const newStudent = await Student.create([payload], { session });

      if (!newStudent) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
      }

      await session.commitTransaction();
      await session.endSession();

      return newStudent;
    }
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }

  return userData;
};

export const UserServices = { createStudent };
