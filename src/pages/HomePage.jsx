import HeroSection from "../components/Hero";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="px-3 md:px-0 bg-black">
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
