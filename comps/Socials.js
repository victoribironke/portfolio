import styles from "../styles/Socials.module.css";
import Link from "next/link";

const Socials = () => {
  const socialsObject = [
    {
      src: "/instagram.svg",
      to: "https://www.instagram.com/victor.ibironke_",
      alt: "instagram",
      title: "Instagram",
    },
    {
      src: "/twitter.svg",
      to: "https://www.twitter.com/victoribironke_",
      alt: "twitter",
      title: "Twitter",
    },
    {
      src: "/facebook.svg",
      to: "https://www.facebook.com/victor.ibironke.963",
      alt: "facebook",
      title: "Facebook",
    },
    {
      src: "/linkedin.svg",
      to: "https://www.linkedin.com/in/victor-ibironke",
      alt: "linkedin",
      title: "LinkedIn",
    },
    {
      src: "/github.svg",
      to: "https://www.github.com/victoribironke",
      alt: "github",
      title: "Github",
    },
    {
      src: "/coffee.png",
      to: "https://www.buymeacoffee.com/victoribironke",
      alt: "buymeacoffee",
      title: "Buy Me A Coffee",
    },
    {
      src: "/resume.png",
      to: "/victoribironke-resume.pdf",
      alt: "resume",
      title: "Download Resume",
    },
  ];

  return (
    <div className={styles.socials}>
      {socialsObject.map((soc) => (
        <Social src={soc.src} to={soc.to} alt={soc.alt} title={soc.title} />
      ))}
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
