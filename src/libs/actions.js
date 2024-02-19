"use server";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }
  try {
    const user = await User.findOne({ username });
    if (user) {
      return "user already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    connectToDb();
    const newUser = new User({
      username,
      email,
      img,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("saved");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
