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
      <h2 className="mt-12 mb-4 font-serif text-3xl leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-lg font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-2 font-semibold tracking-tight">{children}</h4>
    ),
    normal: ({ children }) => <p className="my-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-accent pl-5 font-serif text-xl leading-snug text-ink italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="rounded-md border bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          className="link text-ink"
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 marker:text-faint">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 marker:font-mono marker:text-sm marker:text-faint">
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
            sizes="(min-width: 768px) 672px, 100vw"
            className="h-auto w-full rounded-xl border"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-faint">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <figure className="my-8 overflow-hidden rounded-xl border bg-surface">
        {value.language && value.language !== "text" && (
          <figcaption className="border-b px-4 py-2 font-mono text-[0.68rem] tracking-[0.14em] text-faint uppercase">
            {value.language}
          </figcaption>
        )}
        <pre className="overflow-x-auto p-4 text-[0.85rem] leading-relaxed">
          <code className="font-mono text-ink">{value.code}</code>
        </pre>
      </figure>
    ),
    youtube: ({ value }) => {
      const videoId = value?.url ? getYouTubeId(value.url) : null;

      if (!videoId) return null;

      return (
        <iframe
          className="my-10 aspect-video w-full rounded-xl border"
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
  <div className="text-[1.0625rem] leading-[1.8] text-ink/85">
    <PortableText value={body} components={components} />
  </div>
);

export default PortableTextRenderer;
