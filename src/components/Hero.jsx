const HeroSection = () => {
  return (
    <section className="hero h-[87vh] w-full  flex flex-col items-center md:h-[90vh] relative ">
      <div className="status border-white w-18 h-fit items-center gap-1 flex absolute left-[1rem] top-[1.5rem]">
        <img
          src="images/me.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
      </div>
      <h1 className="text-[2.6rem] font-semibold mt-16 text-center text-white">
        Crafting Memorable User Experiences for Business Success
      </h1>
      <p className="text-[0.8rem] text-center mt-2 text-white">
        I blend exquisite design with impeccable functionality for an
        exceptional user experience, while keeping users captivated
      </p>
      <button className="bg-blue-700 h-12 w-28 cursor-pointer rounded-xl border-none outline-none mt-4 text-white font-semibold hover:brightness-125">
        HIRE ME
      </button>
    </section>
  );
};

export default HeroSection;
