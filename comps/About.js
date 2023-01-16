import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.techs}>
        <img
          src="/html5.svg"
          className={`${styles.html} ${styles.img}`}
          alt="html"
        />
        <img
          src="/css3.svg"
          className={`${styles.css} ${styles.img}`}
          alt="css"
        />
        <img src="/js.svg" className={`${styles.js} ${styles.img}`} alt="js" />
        <img src="/picture.jpg" className={styles.picture} alt="picture" />
        <img
          src="/node-js.svg"
          className={`${styles.nodejs} ${styles.img}`}
          alt="nodejs"
        />
        <img
          src="/react.svg"
          className={`${styles.react} ${styles.img}`}
          alt="react"
        />
        <img
          src="/next-js.svg"
          className={`${styles.nextjs} ${styles.img}`}
          alt="nextjs"
        />
      </div>
      <div className={styles.description}>
        <p className={styles.up}>Full Stack Developer</p>
        <p className={styles.down}>
          I am a full stack web developer from Nigeria. I have been making
          websites for over 2 years. I use HTML, CSS and JavaScript, but I am
          currently focused on React JS, Next JS, Node JS and Express JS.
        </p>
      </div>
    </div>
  );
};

export default About;
