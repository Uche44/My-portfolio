import Header from "./Header";
import HeroSection from "./Hero";
import AboutMe from './AboutMe'
const HomePage = () => {
  return (
    <div className="px-3 md:px-0 bg-black">
      <Header />
      <HeroSection />
      <AboutMe/>
    </div>
  );
};

export default HomePage;
