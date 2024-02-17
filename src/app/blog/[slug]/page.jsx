import Image from "next/image";
import styles from "./singlepost.module.css";
import PostUser from "@/components/postUser/PostUser";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          fill
          alt="post title"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/contact.png"
            width={50}
            height={50}
            alt="post title"
            className={styles.avator}
          />
          <PostUser userId={post.userId} />
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01 Nov</span>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.desc}>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
