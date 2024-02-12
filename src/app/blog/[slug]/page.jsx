import Image from "next/image";
import styles from "./singlepost.module.css";
const SinglePostPage = () => {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/contact.png"
            width={50}
            height={50}
            alt="post title"
            className={styles.avator}
          />
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jax Maverick</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01 Nov</span>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore,
            delectus inventore qui accusamus animi laudantium minima tempora
            beatae quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
