import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-muted-foreground/30 pl-4 italic text-muted-foreground my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-6">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-sm text-muted-foreground text-center mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="bg-[#0d1117] rounded-lg p-4 overflow-x-auto my-4">
        <code className={`text-sm font-mono language-${value.language || "text"}`}>
          {value.code}
        </code>
      </pre>
    ),
  },
};

const PortableTextRenderer = ({ body }: { body: any[] }) => {
  return (
    <div className="markdown">
      <PortableText value={body} components={components} />
    </div>
  );
};

export default PortableTextRenderer;
