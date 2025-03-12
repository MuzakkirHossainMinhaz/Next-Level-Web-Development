import { Model } from "mongoose";

export type TName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TAddress = {
    street: string;
    city: string;
    state: string;
};

export type TGuardian = {
    name: TName;
    relationship: string;
    contactNumber: string;
    occupation: string;
    address: TAddress;
};

export type TStudent = {
    studentId: string;
    password: string;
    name: TName;
    age: number;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: "male" | "female" | "other";
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    emergencyContactNumber: string;
    address: {
        presentAddress: TAddress;
        permanentAddress: TAddress;
    };
    guardian: TGuardian;
    localGuardian: TGuardian;
    avatar?: string;
    isActive: "active" | "inactive";
    isDeleted: boolean;
};

/** for creating static methods */

export interface StudentModel extends Model<TStudent> {
    // eslint-disable-next-line no-unused-vars
    isStudentExists(studentId: string): Promise<TStudent | null>;
}

/** for creating instance methods */

// export type StudentMethods = {
//     isStudentExists: (studentId: string) => Promise<TStudent | null>;
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>
