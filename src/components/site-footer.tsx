import { SITE, SOCIALS } from "@/lib/constants";

const SiteFooter = () => (
  <footer className="flex flex-col-reverse gap-4 border-t pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
    <p className="font-mono text-xs text-faint">
      © {new Date().getFullYear()} {SITE.name}
    </p>

    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {SOCIALS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {label}
          </a>
        </li>
      ))}
      <li>
        <a href={`mailto:${SITE.email}`} className="link">
          Email
        </a>
      </li>
    </ul>
  </footer>
);

export default SiteFooter;
