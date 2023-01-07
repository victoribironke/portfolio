import styles from "../styles/Socials.module.css";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Social
        src="/instagram.svg"
        to="https://www.instagram.com/victor.ibironke_"
        alt="instagram"
        title="Instagram"
      />
      <Social
        src="/twitter.svg"
        to="https://www.twitter.com/victoribironke_"
        title="Twitter"
        alt="twitter"
      />
      <Social
        src="/facebook.svg"
        to="https://www.facebook.com/victor.ibironke.963"
        title="Facebook"
        alt="facebook"
      />
      <Social
        src="/linkedin.svg"
        to="https://www.linkedin.com/in/victor-ibironke"
        alt="linkedin"
        title="LinkedIn"
      />
      <Social
        src="/github.svg"
        to="https://www.github.com/victoribironke"
        alt="github"
        title="GitHub"
      />
      <Social
        src="/coffee.png"
        to="https://www.buymeacoffee.com/victoribironke"
        alt="buymeacoffee"
        title="Buy Me A Coffee"
      />
      <Social
        src="/resume.png"
        title="Download Resume"
        to="/victoribironke-resume.pdf"
        alt="Resume"
      />
    </div>
  );
};

const Social = (props) => {
  return (
    <Link target="_blank" className={styles.social} href={props.to}>
      <img src={props.src} title={props.title} alt={props.alt} />
    </Link>
  );
};

export default Socials;
