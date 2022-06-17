import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with <span className={styles.heart}>&#9829;</span> by CODE TEAM
    </footer>
  );
}

export default Footer;
