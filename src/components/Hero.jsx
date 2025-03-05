const HeroSection = () => {
  return (
    <section className="hero bg-hero h-[85vh] w-full rounded-br-[25rem] rounded-bl-[5rem] flex flex-col items-center md:rounded-bl-[100rem] md:h-[90vh] ">
      <h1 className="text-[3rem] font-bold mt-32 shadow-2xl">
        Hi, I&apos;m Perpetual
      </h1>
      <p className="text-xl font-semibold">
        Professional Frontend Web Developer
      </p>
      <button className="bg-blue-700 h-12 w-32 cursor-pointer rounded-xl border-none outline-none mt-4 text-white font-semibold hover:brightness-125">
        HIRE ME
      </button>
    </section>
  );
};

export default HeroSection;
