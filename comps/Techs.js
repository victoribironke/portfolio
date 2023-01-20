import styles from "../styles/Techs.module.css";

const Techs = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.skill} title="HTML">
        <img src="/html5.svg" alt="html" />
      </p>
      <p className={styles.skill} title="CSS">
        <img src="/css3.svg" alt="css" />
      </p>
      <p className={styles.skill} title="JavaScript">
        <img src="/js.svg" alt="js" />
      </p>
      <p className={styles.skill} title="TypeScript">
        <img src="/typescript.svg" alt="js" />
      </p>
      <p className={styles.skill} title="ReactJS">
        <img src="/react.svg" alt="react" />
      </p>
      <p className={styles.skill} title="NextJS">
        <img src="/next-js.svg" alt="nextjs" />
      </p>
      <p className={styles.skill} title="NodeJS">
        <img src="/node-js.svg" alt="nodejs" />
      </p>
      <p className={styles.skill} title="ExpressJS">
        <img src="/expressjs.svg" alt="express" />
      </p>
      <p className={styles.skill} title="Git">
        <img src="/git.svg" alt="git" />
      </p>
      <p className={styles.skill} title="Python">
        <img src="/python.svg" alt="python" />
      </p>
    </div>
  );
};

export default Techs;
