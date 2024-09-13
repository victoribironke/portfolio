import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      className="markdown font-sub"
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
