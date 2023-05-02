import { profilePic } from "@/helpers/image-paths";
import StyledText from "./StyledText";

const Hero = () => {
  return (
    <section className="flex items-center flex-col gap-2 justify-start py-10 sm:py-12">
      <img
        src={profilePic}
        alt="profile pic"
        className="w-24 h-24 rounded-full grayscale"
      />
      <div className="flex items-center justify-center flex-col gap-2">
        <p className="text-lg sm:text-2xl">
          Software{" "}
          <StyledText
            text="engineer"
            className="border-b-[1px] border-blue pb-[0.1rem]"
          />
        </p>
        <p className="text-lg sm:text-2xl">
          Frontend{" "}
          <StyledText
            text="web developer"
            className="border-b-[1px] border-blue pb-[0.1rem]"
          />
        </p>
      </div>
    </section>
  );
};

export default Hero;
