const HeroSection = () => {
  return (
    <section className="hero h-[87vh] w-full  flex flex-col items-center justify-center md:h-[90vh] relative ">
      <div className="status border-white w-18 h-fit items-center gap-1 flex absolute left-[1rem] top-[4rem]">
        <img
          src="images/me.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
        {/* blink light divs */}
        <div className="grid place-content-center h-3 w-3 rounded-full bg-green-600 animate-pulse">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
        </div>
      </div>
      <h1 className="text-[2.6rem] font-semibold text-center text-white">
        Crafting Memorable User Experiences for your Web Apps
      </h1>

      <button
        onClick={() => window.open("https://wa.me/2349136601904", "_blank")}
        className="h-12 w-28 cursor-pointer rounded-xl border-none outline-none mt-10 text-white font-semibold hover:brightness-125 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-500 animate-gradient"
      >
        LET'S TALK
      </button>
    </section>
  );
};

export default HeroSection;
