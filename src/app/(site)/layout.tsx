import SiteShell from "@/components/site-shell";

const SiteLayout = ({ children }: LayoutProps<"/">) => (
  <SiteShell>{children}</SiteShell>
);

export default SiteLayout;
