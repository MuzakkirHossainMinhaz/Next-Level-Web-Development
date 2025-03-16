import { IAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";

const createAcademicDepartment = async (payload: IAcademicDepartment) => {
  const createdAcademicDepartment = await AcademicDepartmentModel.create(payload);
  return createdAcademicDepartment;
};

const getAllAcademicDepartments = async () => {
  const academicDepartments = await AcademicDepartmentModel.find().populate("academicFaculty");
  return academicDepartments;
};

const getAcademicDepartmentById = async (id: string) => {
  const academicDepartment = await AcademicDepartmentModel.findById(id).populate("academicFaculty");
  return academicDepartment;
};

const updateAcademicDepartmentById = async (id: string, payload: Partial<IAcademicDepartment>) => {
  const updatedAcademicDepartment = await AcademicDepartmentModel.findOneAndUpdate({ _id: id }, payload, { new: true });
  return updatedAcademicDepartment;
};

export const AcademicDepartmentServices = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getAcademicDepartmentById,
  updateAcademicDepartmentById,
};
