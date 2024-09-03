import { SharePostProps } from "@/types/general";
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { Button } from "../ui/button";

const SharePost = ({ title, slug, desc }: SharePostProps) => {
  const blog = encodeURIComponent("https://victoribironke.com/blog/");

  const socials = [
    {
      icon: BiLogoTwitter,
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "Read this article by @victoribironke_"
      )}%0A%0A${title}%0A%0A${blog}${slug}`,
    },
    {
      icon: BiLogoLinkedinSquare,
      name: "LinkedIn",
      url: `https://linkedin.com/sharing/share-offsite/?url=${blog}${slug}&title=${title}&summary=${desc}`,
    },
    {
      icon: BiLogoFacebookSquare,
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${blog}${slug}`,
    },
    {
      icon: BiLogoWhatsapp,
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        "Read this article by Victor Ibironke"
      )}%0A%0A${title}%0A%0A${blog}${slug}`,
    },
  ];

  const openPopup = (url: string) => {
    window.open(
      url,
      "Social share",
      "width=600,height=600,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  return (
    <section className="border-b-2 py-4">
      <h3 className="font-semibold text-lg font-blog-heading mb-4">
        Share Post
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
        {socials.map((s, i) => (
          <Button
            key={i}
            onClick={() => openPopup(s.url)}
            title={`Share to ${s.name}`}
            aria-label={`Share to ${s.name}`}
            className="w-full h-12 grid place-content-center text-2xl bg-black hover:bg-black/90"
          >
            <s.icon aria-hidden="true" />
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SharePost;
