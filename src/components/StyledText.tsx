import { StyledTextProps } from "@/types/general";

const StyledText = ({ text, className }: StyledTextProps) => {
  return <span className={className}>{text}</span>;
};

export default StyledText;
