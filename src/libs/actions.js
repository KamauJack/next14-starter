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

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelet(id);
    console.log("deleted from DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await User.findByIdAndDelet(id);
    console.log("deleted from DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }
  try {
    const user = await User.findOne({ username });
    if (user) {
      return { error: "user already exists" };
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
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
