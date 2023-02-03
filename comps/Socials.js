import styles from "../styles/Socials.module.css";
import Link from "next/link";

const Socials = () => {
  const socialsObject = [
    {
      id: 1,
      src: "/instagram.svg",
      to: "https://www.instagram.com/victor.ibironke_",
      alt: "instagram",
      title: "Instagram",
    },
    {
      id: 2,
      src: "/twitter.svg",
      to: "https://www.twitter.com/victoribironke_",
      alt: "twitter",
      title: "Twitter",
    },
    {
      id: 3,
      src: "/facebook.svg",
      to: "https://www.facebook.com/victor.ibironke.963",
      alt: "facebook",
      title: "Facebook",
    },
    {
      id: 4,
      src: "/linkedin.svg",
      to: "https://www.linkedin.com/in/victor-ibironke",
      alt: "linkedin",
      title: "LinkedIn",
    },
    {
      id: 5,
      src: "/github.svg",
      to: "https://www.github.com/victoribironke",
      alt: "github",
      title: "Github",
    },
    {
      id: 6,
      src: "/hashnode.svg",
      to: "https://victoribironke.hashnode.dev/",
      alt: "hashnode",
      title: "Hashnode",
    },
    {
      id: 7,
      src: "/coffee.png",
      to: "https://www.buymeacoffee.com/victoribironke",
      alt: "buymeacoffee",
      title: "Buy Me A Coffee",
    },
    {
      id: 8,
      src: "/resume.png",
      to: "/victoribironke-resume.pdf",
      alt: "resume",
      title: "Download Resume",
    },
  ];

  return (
    <div className={styles.socials}>
      {socialsObject.map((soc) => (
        <Social
          key={soc.id}
          src={soc.src}
          to={soc.to}
          alt={soc.alt}
          title={soc.title}
        />
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
