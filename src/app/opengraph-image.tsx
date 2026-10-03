import { SITE } from "@/lib/constants";
import { OG_SIZE, renderPosterImage } from "@/lib/og";

export const alt = SITE.name;
export const size = OG_SIZE;
export const contentType = "image/png";

const Image = () => renderPosterImage();

export default Image;
