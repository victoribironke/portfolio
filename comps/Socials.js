import styles from "../styles/Socials.module.css";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Social
        src="/instagram.svg"
        to="https://www.instagram.com/victor.ibironke_"
        alt="instagram"
      />
      <Social
        src="/twitter.svg"
        to="https://www.twitter.com/victoribironke_"
        alt="twitter"
      />
      <Social
        src="/facebook.svg"
        to="https://www.facebook.com/victor.ibironke.963"
        alt="facebook"
      />
      <Social
        src="/linkedin.svg"
        to="https://www.linkedin.com/in/victor-ibironke"
        alt="linkedin"
      />
      <Social
        src="/github.svg"
        to="https://www.github.com/victoribironke"
        alt="github"
      />
      <Social
        src="/tiktok.svg"
        to="https://www.tiktok.com/@vdiqbd"
        alt="tiktok"
      />
      <Social
        src="/coffee.png"
        to="https://www.buymeacoffee.com/victoribironke"
        alt="buymeacoffee"
      />
      <Social
        src="/resume.png"
        to="https://drive.google.com/file/d/172MpnWJfhW2-HhCeJCiNzruKlJKZPsCB/view?usp=sharing"
        alt="Resume"
      />
    </div>
  );
};

const Social = (props) => {
  return (
    <Link target="_blank" className={styles.social} href={props.to}>
      <img src={props.src} alt={props.alt} />
    </Link>
  );
};

export default Socials;
