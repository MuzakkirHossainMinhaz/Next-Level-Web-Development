import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import config from "../../config";

const userSchema = new Schema<IUser>(
  {
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needsToChangePassword: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["admin", "faculty", "student"],
      default: "student",
    },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

/** pre save hook */
userSchema.pre("save", async function (next) {
  // hashing password and saving
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds));

  next();
});

/** post save hook */
userSchema.post("save", async function (doc, next) {
  doc.password = "***********";

  next();
});

export const User = model<IUser>("User", userSchema);
