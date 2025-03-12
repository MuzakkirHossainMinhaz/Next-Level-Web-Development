import { Request, Response } from "express";
import { StudentServices } from "./student.services";
// import studentJoiSchema from "./student.joi-validation";
import studentZodSchema from "./student.zod-validation";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;

        // validate the data using Joi
        // const { error, value } = studentJoiSchema.validate(studentData);

        // if (error) {
        //     return res.status(400).json({
        //         success: false,
        //         message: error.details[0].message,
        //     });
        // }

        // validate the data using zod
        const value = studentZodSchema.parse(studentData);

        // call the service function
        const newStudent = await StudentServices.createStudent(value);

        // send the response
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: newStudent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message || "Internal server error",
        });
    }
};

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await StudentServices.getAllStudents();

        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            count: students.length,
            data: students,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message || "Internal server error",
        });
    }
};

const getStudentByStudentId = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;

        const student = await StudentServices.getStudentByStudentId(studentId);

        res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: student,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message || "Internal server error",
        });
    }
};

const deleteStudentByStudentId = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;

        const student = await StudentServices.deleteStudentByStudentId(studentId);

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: student,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message || "Internal server error",
        });
    }
};

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getStudentByStudentId,
    deleteStudentByStudentId,
};
