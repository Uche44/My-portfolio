import Header from "./Header";

const HeroSection = () => {
  
  return (
    <section className="hero h-[87vh] w-full  flex flex-col items-center md:h-[90vh] relative ">
     <Header />
      <img src="/images/code.gif" alt="" className="mt-16 w-[80%]" />

    
     
    </section>
  );
};

export default HeroSection;
