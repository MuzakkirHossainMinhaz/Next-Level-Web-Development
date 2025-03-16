import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemester(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semester created successfully",
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req, res) => {
  const semesters = await AcademicSemesterServices.getAllSemesters();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semesters fetched successfully",
    data: semesters,
  });
});

const getSemesterById = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const semester = await AcademicSemesterServices.getSemesterById(semesterId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semester fetched successfully",
    data: semester,
  });
});

const updateSemesterById = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const updatedSemester = await AcademicSemesterServices.updateSemesterById(semesterId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semester updated successfully",
    data: updatedSemester,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllSemesters,
  getSemesterById,
  updateSemesterById,
};
