import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Student } from "./student.model";
import mongoose from "mongoose";
import { User } from "../user/user.model";
import { IStudent } from "./student.interface";

const getAllStudents = async () => {
  const students = await Student.find();
  return students;
};

const getStudentByStudentId = async (studentId: string) => {
  const student = await Student.findOne({ studentId });
  return student;
};

const updateStudentByStudentId = async (studentId: string, payload: Partial<IStudent>) => {
  if (await Student.isStudentExists(studentId)) {
    throw new AppError(httpStatus.NOT_FOUND, "Student not found");
  }

  type FlattenedObject = Record<string, string | number>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function flattenObject(obj: any, parentKey?: string): FlattenedObject {
    let result: FlattenedObject = {};

    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
          const nestedObj = flattenObject(obj[key], newKey);
          result = { ...result, ...nestedObj };
        } else {
          result[newKey] = obj[key];
        }
      }
    }

    return result;
  }

  // Flatten the object
  const flattenedObject = flattenObject(payload);

  const student = await Student.findOneAndUpdate({ studentId }, flattenedObject, {
    new: true,
  });
  return student;
};

const deleteStudentByStudentId = async (studentId: string) => {
  if (await Student.isStudentExists(studentId)) {
    const session = await mongoose.startSession();
    try {
      await session.startTransaction();
      const student = await Student.updateOne({ studentId }, { $set: { isDeleted: true } }, { session });
      if (!student) {
        throw new AppError(httpStatus.BAD_REQUEST, "Student is not deleted");
      }

      const user = await User.updateOne({ userId: studentId }, { $set: { isDeleted: true } }, { session });

      if (!user) {
        throw new AppError(httpStatus.BAD_REQUEST, "User is not deleted");
      }

      await session.commitTransaction();
      await session.endSession();

      return student;
    } catch (error) {
      await session.abortTransaction();
      await session.endSession();
    }
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Student not found");
  }
};

export const StudentServices = {
  getAllStudents,
  getStudentByStudentId,
  updateStudentByStudentId,
  deleteStudentByStudentId,
};
