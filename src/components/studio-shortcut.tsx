"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const StudioShortcut = () => {
  const router = useRouter();
  const buffer = useRef("");
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || target.isContentEditable) {
        return;
      }

      if (e.key.length === 1) {
        buffer.current += e.key.toLowerCase();

        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          buffer.current = "";
        }, 1000);

        if (buffer.current.endsWith("studio")) {
          buffer.current = "";
          router.push("/studio");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [router]);

  return null;
};

export default StudioShortcut;
