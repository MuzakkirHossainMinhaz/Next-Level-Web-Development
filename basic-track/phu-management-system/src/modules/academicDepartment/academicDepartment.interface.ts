import { Types } from "mongoose";

export interface IAcademicDepartment {
  name: string;
  shortName: string;
  academicFaculty: Types.ObjectId;
}
