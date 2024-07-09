import { cn } from "@/lib/utils";

const Footer = ({ className }: { className: string }) => {
  return (
    <footer
      className={cn(
        "w-full text-white font-mono z-10 backdrop-blur-xl py-6 flex items-center justify-center px-6",
        className
      )}
    >
      <div className="w-full max-w-5xl py-4 px-6 flex items-center justify-center gap-8 border border-zinc-700 rounded-2xl bg-gray-100 bg-opacity-5">
        Victor Ibironke, {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
