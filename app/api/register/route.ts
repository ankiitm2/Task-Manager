import User from "@/app/models/User";
import connect from "@/app/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();

  await connect();

  const existingUSer = await User.findOne({ email });
  console.log("existingUSer === ", existingUSer);
  if (existingUSer) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is Registered", { status: 200 });
  } catch (error: any) {
    console.log("error === ", error);
    return new NextResponse(error, { status: 500 });
  }
};
