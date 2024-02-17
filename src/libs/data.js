import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_nostore as noStore } from "next/cache";
// //TEMP DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];
// const posts = [
//   {
//     id: 1,
//     title: "Post1",
//     body: "In “The Psychology of Money,” Morgan Housel, a renowned financial writer and investor, explores the hidden forces and psychological factors that shape our financial decisions.",
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: "Post2",
//     body: "In “The Psychology of Money,” Morgan Housel, a renowned financial writer and investor, explores the hidden forces and psychological factors that shape our financial decisions.",
//     userId: 1,
//   },
//   {
//     id: 3,
//     title: "Post3",
//     body: "In “The Psychology of Money,” Morgan Housel, a renowned financial writer and investor, explores the hidden forces and psychological factors that shape our financial decisions.",
//     userId: 2,
//   },
//   {
//     id: 4,
//     title: "Post4",
//     body: "In “The Psychology of Money,” Morgan Housel, a renowned financial writer and investor, explores the hidden forces and psychological factors that shape our financial decisions.",
//     userId: 2,
//   },

// ];
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async (id) => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
