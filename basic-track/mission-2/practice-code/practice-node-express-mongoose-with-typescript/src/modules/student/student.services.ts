import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudent = async (studentData: TStudent) => {
    if (await Student.isStudentExists(studentData.studentId)) {
        throw new Error("Student already exists");
    }

    const student = await Student.create(studentData);

    // const newStudent = new Student(studentData);

    // if (await newStudent.isStudentExists(newStudent.studentId)) {
    //     throw new Error("Student already exists");
    // }

    // const student = await newStudent.save();

    return student;
};

const getAllStudents = async () => {
    const students = await Student.find();
    return students;
};

const getStudentByStudentId = async (studentId: string) => {
    const student = await Student.findOne({ studentId });
    return student;
};

const deleteStudentByStudentId = async (studentId: string) => {
    const student = await Student.updateOne({ studentId }, { $set: { isDeleted: true } });
    return student;
};

export const StudentServices = {
    createStudent,
    getAllStudents,
    getStudentByStudentId,
    deleteStudentByStudentId,
};
