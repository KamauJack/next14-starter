import Link from "next/link";
import Image from "next/image";
import styles from "./postCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill className={styles.img} />
        </div>
        <span className={styles.date}>1st Nov</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore,
          delectus inventore qui accusamus animi laudantium minima tempora
          beatae quibusdam.
        </p>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
