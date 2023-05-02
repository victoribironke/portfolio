const Header = () => {
  return (
    <header className="w-full flex flex-col gap-4 items-center justify-center">
      <div className="text-gray hover:text-blue border-b-[1px] border-blue text-xs w-fit cursor-pointer font-bold rs:text-sm sm:text-base">
        Lagos, Nigeria.
      </div>
      <p className="text-2xl rs:text-3xl sm:text-4xl font-semibold">
        Victor Ibironke
      </p>
    </header>
  );
};

export default Header;
