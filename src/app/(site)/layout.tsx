import StudioShortcut from "@/components/studio-shortcut";

const SiteLayout = ({ children }: LayoutProps<"/">) => (
  <>
    <StudioShortcut />
    {children}
    <div aria-hidden className="grain" />
  </>
);

export default SiteLayout;
