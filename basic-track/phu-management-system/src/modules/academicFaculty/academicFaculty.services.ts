import { IAcademicFaculty } from "./academicFaculty.iterface";
import { AcademicFacultyModel } from "./academicFaculty.model";

const createAcademicFaculty = async (payload: IAcademicFaculty) => {
  const createdAcademicFaculty = await AcademicFacultyModel.create(payload);
  return createdAcademicFaculty;
};

const getAllAcademicFaculties = async () => {
  const academicFaculties = await AcademicFacultyModel.find();
  return academicFaculties;
};

const getAcademicFacultyById = async (id: string) => {
  const academicFaculty = await AcademicFacultyModel.findById(id);
  return academicFaculty;
};

const updateAcademicFacultyById = async (id: string, payload: Partial<IAcademicFaculty>) => {
  const updatedAcademicFaculty = await AcademicFacultyModel.findByIdAndUpdate({ _id: id }, payload, { new: true });
  return updatedAcademicFaculty;
};

export const AcademicFacultyServices = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getAcademicFacultyById,
  updateAcademicFacultyById,
};
