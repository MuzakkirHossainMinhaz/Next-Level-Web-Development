import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.services";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const createdAcademicFaculty = await AcademicFacultyServices.createAcademicFaculty(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty created successfully",
    data: createdAcademicFaculty,
  });
});

const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const academicFaculties = await AcademicFacultyServices.getAllAcademicFaculties();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculties fetched successfully",
    data: academicFaculties,
  });
});

const getAcademicFacultyById = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;

  const academicFaculty = await AcademicFacultyServices.getAcademicFacultyById(academicFacultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty fetched successfully",
    data: academicFaculty,
  });
});

const updateAcademicFacultyById = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;

  const updatedAcademicFaculty = await AcademicFacultyServices.updateAcademicFacultyById(academicFacultyId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty updated successfully",
    data: updatedAcademicFaculty,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getAcademicFacultyById,
  updateAcademicFacultyById,
};
