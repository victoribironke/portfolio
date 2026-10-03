import NowPlayingProvider from "@/components/now-playing-provider";
import StudioShortcut from "@/components/studio-shortcut";

const SiteLayout = ({ children }: LayoutProps<"/">) => (
  <NowPlayingProvider>
    <StudioShortcut />
    {children}
  </NowPlayingProvider>
);

export default SiteLayout;
