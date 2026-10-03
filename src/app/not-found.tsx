import Link from "next/link";
import Wordmark from "@/components/wordmark";
import { PAGES } from "@/lib/constants";

const NotFound = () => (
  <main className="flex min-h-svh flex-col justify-between gap-16 px-edge pt-edge pb-[clamp(1.5rem,2.6vw,2.75rem)]">
    <div className="flex animate-rise flex-col gap-[clamp(1.75rem,5vh,3rem)] text-[clamp(0.95rem,1.1vw,1.22rem)]">
      <Link href={PAGES.home} className="w-fit link-muted">
        ← Index
      </Link>
      <p className="text-[clamp(1.2rem,1.7vw,1.75rem)] leading-[1.34]">
        404. There&apos;s nothing at this address, or it moved somewhere else.
      </p>
    </div>
    <Wordmark className="animate-fade opacity-20" />
    <div aria-hidden className="grain" />
  </main>
);

export default NotFound;
