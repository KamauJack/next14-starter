import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
          culpa excepturi voluptates iusto laborum ut numquam temporibus at.
          Dolor aut nisi laboriosam reiciendis animi maxime repudiandae
          molestias id, temporibus quam. Dolores impedit vitae beatae ea tempore
          iste qui adipisci laudantium deleniti! Nobis architecto rem sapiente
          illum culpa dicta ad!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" fill alt="About Page" className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
