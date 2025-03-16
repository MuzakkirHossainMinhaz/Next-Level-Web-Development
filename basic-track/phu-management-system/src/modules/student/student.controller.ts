import { StudentServices } from "./student.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(async (req, res) => {
  const students = await StudentServices.getAllStudents();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Students fetched successfully",
    data: students,
  });
});

const getStudentByStudentId = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const student = await StudentServices.getStudentByStudentId(studentId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student fetched successfully",
    data: student,
  });
});

const updateStudentByStudentId = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student: studentData } = req.body;

  const updatedStudent = await StudentServices.updateStudentByStudentId(studentId, studentData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student updated successfully",
    data: updatedStudent,
  });
});

const deleteStudentByStudentId = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const student = await StudentServices.deleteStudentByStudentId(studentId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student deleted successfully",
    data: student,
  });
});

export const StudentControllers = {
  getAllStudents,
  getStudentByStudentId,
  updateStudentByStudentId,
  deleteStudentByStudentId,
};
