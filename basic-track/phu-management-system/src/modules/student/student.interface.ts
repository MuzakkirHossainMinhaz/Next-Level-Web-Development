import { Model, Types } from "mongoose";

export interface IName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
}

export interface IGuardian {
  name: IName;
  relationship: string;
  contactNumber: string;
  occupation: string;
  address: IAddress;
}

export interface IStudent {
  studentId: string;
  userId: Types.ObjectId;
  name: IName;
  age: number;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: "male" | "female" | "other";
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  emergencyContactNumber: string;
  address: {
    presentAddress: IAddress;
    permanentAddress: IAddress;
  };
  guardian: IGuardian;
  localGuardian: IGuardian;
  avatar?: string;
  isDeleted: boolean;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
}

/** for creating static methods */
export interface StudentModel extends Model<IStudent> {
  // eslint-disable-next-line no-unused-vars
  isStudentExists(studentId: string): Promise<IStudent | null>;
}

/** for creating instance methods */

// export type StudentMethods = {
//     isStudentExists: (studentId: string) => Promise<TStudent | null>;
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>
