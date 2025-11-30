import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";
import jwt from "jsonwebtoken";
import { ERoleType } from "../utils/enums";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const exitingUser = await User.findOne({ email });

    if (exitingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const user: IUser = await User.create({
      name,
      email,
      role: role || "User",
      password: hashedPwd,
    });

    res.status(201).json({
      message: "Registered Successfully",
      data: {
        name: user.name,
        email: user.email,
        role: role || "User",
      },
    });
  } catch (error: any) {
    res.send(500).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: IUser | null = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const role = user.role || ERoleType.USER;
    const isConfirmPwd = await bcrypt.compare(password, user.password);
    if (!isConfirmPwd) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role, name: user.name, email: user.email },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successfully",
      data: {
        token,
      },
    });
  } catch (error: any) {
    res.send(500).json({ error: error.message });
  }
};
