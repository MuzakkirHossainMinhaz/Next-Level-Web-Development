import { nameCodeMapper } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemester = async (payload: IAcademicSemester) => {
  if (nameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid academic semester code");
  }

  const createAcademicSemester = await AcademicSemesterModel.create(payload);
  return createAcademicSemester;
};

const getAllSemesters = async () => {
  const academicSemesters = await AcademicSemesterModel.find();
  return academicSemesters;
};

const getSemesterById = async (id: string) => {
  const academicSemester = await AcademicSemesterModel.findById(id);
  return academicSemester;
};

const updateSemesterById = async (id: string, payload: Partial<IAcademicSemester>) => {
  if (payload.name && payload.code && nameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid academic semester code");
  }

  const updatedSemester = await AcademicSemesterModel.updateOne({ _id: id }, payload, { new: true });

  return updatedSemester;
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  getAllSemesters,
  getSemesterById,
  updateSemesterById,
};
