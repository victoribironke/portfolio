import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import StudioShortcut from "./studio-shortcut";

const SiteShell = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-16 px-5 py-8 sm:px-6 sm:py-12">
    <StudioShortcut />
    <SiteHeader />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </div>
);

export default SiteShell;
