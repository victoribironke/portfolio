import Link from "next/link";
import Anchor from "./Anchor";

const Mid = () => {
  return (
    <section className="bg-ble w-full flex gap-3 text-lg sm:text-2xl items-center justify-center mt-6">
      <p>Creator of</p>
      <Link
        href="https://thestylistic.io"
        className="text-gray hover:text-blue text-lg sm:text-2xl border-b-[1px] border-blue pb-[0.1rem]"
      >
        Stylistic
      </Link>
    </section>
  );
};

export default Mid;
