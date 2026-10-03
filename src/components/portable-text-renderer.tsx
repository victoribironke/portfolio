import {
  PortableText,
  type PortableTextComponents,
  type PortableTextProps,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

const getYouTubeId = (value: string) => {
  try {
    const url = new URL(value);

    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.hostname.includes("youtube.com")) return url.searchParams.get("v");
  } catch {
    // Invalid URLs render nothing.
  }

  return null;
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-14 mb-5 display-type text-[clamp(2rem,4vw,3rem)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-xl font-medium tracking-[-0.015em]">
        {children}
      </h3>
    ),
    h4: ({ children }) => <h4 className="mt-8 mb-2 font-medium">{children}</h4>,
    normal: ({ children }) => <p className="my-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l border-fg pl-6 text-[clamp(1.3rem,2vw,1.75rem)] leading-snug tracking-[-0.01em] text-fg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-fg">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="rounded-[3px] bg-line px-1.5 py-0.5 font-mono text-[0.85em] text-fg">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          className="text-fg underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-fg"
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 marker:text-muted">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 marker:font-mono marker:text-sm marker:text-muted">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1400).fit("max").auto("format").url()}
            alt={value.alt ?? ""}
            width={1400}
            height={800}
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="h-auto w-full rounded-[3px]"
          />
          {value.caption && (
            <figcaption className="mt-3 text-sm text-muted">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <figure className="my-8 overflow-hidden rounded-[3px] bg-fg text-bg">
        {value.language && value.language !== "text" && (
          <figcaption className="border-b border-bg/15 px-4 py-2 font-mono text-[0.7rem] tracking-[0.09em] uppercase opacity-60">
            {value.language}
          </figcaption>
        )}
        <pre className="overflow-x-auto p-4 text-[0.85rem] leading-relaxed">
          <code className="font-mono">{value.code}</code>
        </pre>
      </figure>
    ),
    youtube: ({ value }) => {
      const videoId = value?.url ? getYouTubeId(value.url) : null;

      if (!videoId) return null;

      return (
        <iframe
          className="my-10 aspect-video w-full rounded-[3px]"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    },
  },
};

type PortableTextRendererProps = {
  body: PortableTextProps["value"];
};

const PortableTextRenderer = ({ body }: PortableTextRendererProps) => (
  <div className="text-[clamp(1.05rem,1.2vw,1.15rem)] leading-[1.7] text-fg/85">
    <PortableText value={body} components={components} />
  </div>
);

export default PortableTextRenderer;
