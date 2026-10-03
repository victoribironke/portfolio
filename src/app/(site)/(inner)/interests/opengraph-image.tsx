import { PAGES, SITE } from "@/lib/constants";
import { OG_SIZE, renderPageImage } from "@/lib/og";

export const alt = `Interests · ${SITE.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

const Image = () =>
  renderPageImage({
    title: "Interests",
    description:
      "Away from the editor, there's usually music playing and a chess game going badly.",
    path: PAGES.interests,
  });

export default Image;
