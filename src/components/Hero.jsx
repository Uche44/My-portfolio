const HeroSection = () => {
  return (
    <section className="hero h-[87vh] w-full  flex flex-col items-center md:h-[90vh] relative ">
      <div className="status border-white w-18 h-fit items-center gap-1 flex absolute left-[1rem] top-[0.8rem]">
        <img
          src="images/me.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <div className="grid place-content-center h-3 w-3 rounded-full bg-green-600 animate-pulse">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
        </div>
      </div>
      <h1 className="text-[2.6rem] font-semibold mt-10 text-center text-white">
        Crafting Memorable User Experiences for your Web Apps
      </h1>
      <p className="text-[0.8rem] text-center mt-3 text-white">
        I blend exquisite design with impeccable functionality for an
        exceptional user experience, while keeping users captivated
      </p>
      <button className="bg-blue-700 h-12 w-28 cursor-pointer rounded-xl border-none outline-none mt-6 text-white font-semibold hover:brightness-125">
        HIRE ME
      </button>
    </section>
  );
};

export default HeroSection;
