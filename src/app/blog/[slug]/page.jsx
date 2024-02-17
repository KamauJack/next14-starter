import Image from "next/image";
import styles from "./singlepost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/libs/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return { title: post.title, description: post.desc };
};

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //GET DATA WITH AN API

  //   const post = await getData(slug);

  //GET DATA WITHOUT AN API
  const post = await getPost(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} fill alt="post title" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.desc}>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
