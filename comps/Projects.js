import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

const Project = () => {
  const [projectsObject, setProjectsObject] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const finalData = [];
        for (let i = 0; i < 5; i++) {
          finalData.push(data[i]);
        }
        setProjectsObject(finalData);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div className={styles.wrapper}>
      {projectsObject.map((proj) => (
        <Proj
          name={proj.name}
          code={proj.code}
          site={proj.site}
          stack={proj.stack}
          key={proj.id}
        />
      ))}
    </div>
  );
};

const Proj = (props) => {
  const stack = props.stack.split("|");

  return (
    <div className={styles.proj}>
      <p className={styles.name}>{props.name}</p>
      <div className={styles.stack}>
        {stack.map((tch) => (
          <p key={stack.indexOf(tch)} className={styles.tech}>
            {tch}
          </p>
        ))}
      </div>
      <div className={styles.links}>
        <Link className={styles.site} href={props.site} target="_blank">
          <img src="/link.svg" alt="link" /> Site
        </Link>
        <Link className={styles.code} href={props.code} target="_blank">
          <img src="/tag.svg" alt="link" /> Code
        </Link>
      </div>
    </div>
  );
};

export default Project;
export { Proj };
