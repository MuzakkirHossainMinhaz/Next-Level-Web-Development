export interface IUser {
  userId: string;
  password: string;
  needsToChangePassword: boolean;
  role: "admin" | "faculty" | "student";
  isActive: boolean;
  isDeleted: boolean;
}
