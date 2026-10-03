import Link from "next/link";
import SiteShell from "@/components/site-shell";
import { PAGES } from "@/lib/constants";

const NotFound = () => (
  <SiteShell>
    <div className="animate-rise space-y-4 py-16">
      <p className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
        404
      </p>
      <h1 className="font-serif text-5xl tracking-tight">
        Nothing <em className="text-accent">here</em>.
      </h1>
      <p className="text-muted">
        This page doesn&apos;t exist, or it moved.{" "}
        <Link href={PAGES.home} className="link text-ink">
          Head home
        </Link>
        .
      </p>
    </div>
  </SiteShell>
);

export default NotFound;
