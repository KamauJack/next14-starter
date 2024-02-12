import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>JaxDev</div>
      <div className={styles.text}>copyright &copy; 2024 </div>
    </div>
  );
};

export default Footer;
