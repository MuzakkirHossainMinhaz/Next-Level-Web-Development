import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.services";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const createdAcademicDepartment = await AcademicDepartmentServices.createAcademicDepartment(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department created successfully",
    data: createdAcademicDepartment,
  });
});

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const academicDepartments = await AcademicDepartmentServices.getAllAcademicDepartments();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Departments fetched successfully",
    data: academicDepartments,
  });
});

const getAcademicDepartmentById = catchAsync(async (req, res) => {
  const { academicDepartmentId } = req.params;

  const academicDepartment = await AcademicDepartmentServices.getAcademicDepartmentById(academicDepartmentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department fetched successfully",
    data: academicDepartment,
  });
});

const updateAcademicDepartmentById = catchAsync(async (req, res) => {
  const { academicDepartmentId } = req.params;

  const updatedAcademicDepartment = await AcademicDepartmentServices.updateAcademicDepartmentById(
    academicDepartmentId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department updated successfully",
    data: updatedAcademicDepartment,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getAcademicDepartmentById,
  updateAcademicDepartmentById,
};
