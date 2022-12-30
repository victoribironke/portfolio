import Link from "next/link";
import styles from "../styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.wrapper}>
      <Proj
        src="/url-shortener.jpg"
        name="URL Shortener App"
        desc="An application that shortens long links using the shrtcode URL shortening API."
        code="https://github.com/victoribironke/url-shortener-app"
        site="https://shortener-app.netlify.app/"
        stack="Next.js|CSS|Shrtcode API"
        bg="hsl(0, 0%, 95%)"
      />
      <Proj
        src="/ecommerce-page.jpg"
        name="eCommerce Product Page"
        desc="A sneakers product page with a gallery and cart functionality."
        code="https://github.com/victoribironke/ecommerce-product-page"
        site="https://sneakerss-page.netlify.app/"
        stack="Next.js|CSS"
        bg="white"
      />
      <Proj
        src="/advice-app.jpg"
        name="Advice Generator App"
        desc="A website that gives you random nuggets of advice using the Advice Slip API."
        code="https://github.com/victoribironke/advice-generator-app"
        site="https://victoribironke.github.io/advice-generator-app/"
        stack="HTML|CSS|JavaScript|Advice Slip API"
        bg="hsl(218, 23%, 16%)"
      />
      <Proj
        src="/tip-calculator.jpg"
        name="Tip Calculator App"
        desc="A tip calculator for calculating the amount each person will pay in tips and total."
        code="https://github.com/vdiqbd/tip-calculator"
        site="https://victoribironke.github.io/tip-calculator/"
        stack="HTML|CSS|JavaScript"
        bg="hsl(185, 41%, 84%)"
      />
      <Proj
        src="/multi-step-form.jpg"
        name="Multi-step Form"
        desc="A 4-page form with price toggling functionality that 'subscribes' you to a gaming platform."
        code="https://github.com/victoribironke/multi-step-form"
        site="https://victoribironke.github.io/multi-step-form/"
        stack="HTML|CSS|JavaScript"
        bg="hsl(231, 100%, 99%)"
      />
    </div>
  );
};

const Proj = (props) => {
  const stack = props.stack.split("|");

  return (
    <div className={styles.proj}>
      <img
        className={styles.img}
        style={{ background: props.bg }}
        src={props.src}
        alt=""
      />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.desc}>{props.desc}</p>
      <div className={styles.stack}>
        {stack.map((tch) => (
          <p className={styles.tech}>{tch}</p>
        ))}
      </div>
      <div className={styles.links}>
        <Link className={styles.site} href={props.site} target="_blank">
          View site
        </Link>
        <Link className={styles.code} href={props.code} target="_blank">
          View code
        </Link>
      </div>
    </div>
  );
};

export default Project;
