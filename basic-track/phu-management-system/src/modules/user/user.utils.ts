import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId = async () => {
  const lastStudent = await User.findOne({ role: "student" }, { userId: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  return lastStudent?.userId || "0";
};

export const generateStudentId = async (payload: IAcademicSemester) => {
  // first student
  // let currentStudentId = "0";
  let lastStudentId = await findLastStudentId();

  const lastStudentSemesterYear = Number(lastStudentId.substring(0, 2));
  const lastStudentSemesterCode = Number(lastStudentId.substring(2, 4));
  const currentSemesterYear = Number(payload.year);
  const currentSemesterCode = Number(payload.code);

  if (
    currentSemesterYear > lastStudentSemesterYear ||
    (currentSemesterYear >= lastStudentSemesterYear && currentSemesterCode > lastStudentSemesterCode)
  ) {
    lastStudentId = "0";
  } else {
    lastStudentId = lastStudentId.substring(4);
  }

  let incrementId = (Number(lastStudentId) + 1).toString().padStart(4, "0");

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
