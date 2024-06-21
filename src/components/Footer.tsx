import { cn } from "@/lib/utils";

const Footer = ({ className }: { className: string }) => {
  return (
    <footer
      className={cn(
        "w-full text-white font-mono border-t border-zinc-700 z-10 backdrop-blur-xl py-6 flex items-center justify-center",
        className
      )}
    >
      Victor Ibironke, {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
