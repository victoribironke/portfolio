import Link from "next/link";
import styles from "../styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.wrapper}>
      <Proj
        name="URL Shortener App"
        code="https://github.com/victoribironke/url-shortener-app"
        site="https://shortener-app.netlify.app/"
        stack="Next.js|CSS|Shrtcode API"
      />
      <Proj
        name="eCommerce Product Page"
        code="https://github.com/victoribironke/ecommerce-product-page"
        site="https://sneakerss-page.netlify.app/"
        stack="Next.js|CSS"
      />
      <Proj
        name="Job Listings with Filtering"
        code="https://github.com/victoribironke/job-listings"
        site="https://techjoblistings.netlify.app/"
        stack="Next.js|CSS"
      />
      <Proj
        name="Countries Archive"
        code="https://github.com/victoribironke/rest-countries-api-app"
        site="https://countriesarchive.netlify.app/"
        stack="Next.js|CSS|Countries API"
      />
      <Proj
        name="Rock Paper Scissors Game"
        code="https://github.com/victoribironke/rock-paper-scissors-game"
        site="https://nextjsrpsgame.netlify.app/"
        stack="Next.js|CSS"
      />
      <Proj
        name="Advice Generator App"
        code="https://github.com/victoribironke/advice-generator-app"
        site="https://victoribironke.github.io/advice-generator-app/"
        stack="HTML|CSS|JavaScript|Advice Slip API"
      />
      <Proj
        name="Multi-step form"
        code="https://github.com/victoribironke/multi-step-form"
        site="https://victoribironke.github.io/multi-step-form/"
        stack="HTML|CSS|JavaScript"
      />
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
          <p className={styles.tech}>{tch}</p>
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
