import Anchor from "./Anchor";

const Footer = () => {
  return (
    <footer className="w-full flex flex-wrap items-center justify-center gap-4 mt-20">
      <Anchor to="https://twitter.com/victoribironke_" text="twitter" />
      <Anchor to="https://instagram.com/victor.ibironke_" text="instagram" />
      <Anchor to="https://github.com/victoribironke" text="github" />
      <Anchor
        to="https://www.buymeacoffee.com/victoribironke"
        text="buy me a coffee"
      />
    </footer>
  );
};

export default Footer;
