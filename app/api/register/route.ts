import User from "@/app/models/User";
import connect from "@/app/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();

  await connect();

  const existingUSer = await User.findOne({ email });
  if (existingUSer) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = await new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await new newUser.save();
    return new NextResponse("User is Registered", { status: 200 });
  } catch (error) {
    return new NextResponse("connection failed", { status: 500 });
  }
};
