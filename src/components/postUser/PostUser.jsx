import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/libs/data";
//GET DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getData(userId);

  //GET DATA WITHOUT AN API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        width={50}
        height={50}
        alt="post title"
        className={styles.avator}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
