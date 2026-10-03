import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

const StudioLayout = ({ children }: LayoutProps<"/studio/[[...tool]]">) =>
  children;

export default StudioLayout;
