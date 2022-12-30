import styles from "../styles/Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      Copyright ©️ Victor Ibironke {year}. All rights reserved.
    </div>
  );
};

export default Footer;
