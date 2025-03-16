import { UserServices } from "./user.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const newStudent = await UserServices.createStudent(password, studentData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Student created successfully",
    data: newStudent,
  });
});

export const UserControllers = {
  createStudent,
};
