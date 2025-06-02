import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// import { Gallery } from "./Tools";
const AboutMe = () => {
  const Tools = [
    { id: 1, name: "HTML", img: "images/html.png" },

    { id: 2, name: "CSS", img: "images/css.png" },

    { id: 3, name: "javaScript", img: "images/js.png" },
  ];

  const Tools2 = [
    { id: 1, name: "tailwindcss", img: "images/tailwind.png" },
    { id: 1, name: "React", img: "images/react.png" },
    { id: 1, name: "Firebase", img: "images/firebase.png" },
  ];

  return (
    <section
      id="about"
      className="w-full h-fit flex flex-col items-center pb-4 scroll-m-8"
    >
      <h2 className="text-white text-[2rem] mb-4">About Me</h2>
      <div className="w-[90%] px-4 py-5 rounded-[15px]  bg-gradient-to-r from-[#131b1a] via-black to-[#131b1a] animate-gradient">
        <p className="text-white">
          Hi! I'm Perpetual Asogwa, a passionate Frontend developer who turns
          ideas into interactive, user-friendly experiences.{" "}
          <div className="w-full h-[3rem] flex justify-between items-center mt-3">
            <a
              href="https://github.com/Uche44"
              className=""
              target="_blank"
            >
              <FaGithub className="text-[3rem]" />
            </a>

            <a
              href="https://x.com/perpetualuchec5"
              className=""
              target="_blank"
            >
              <FaTwitter className="text-[3rem]" />
            </a>

            <a
              href="https://www.linkedin.com/in/perpetual-uchechukwu-798b51262/"
              className=""
              target="_blank"
            >
              <FaLinkedin className="text-[3rem]" />
            </a>
          </div>
        </p>
      </div>

      <h2 className="text-white text-[2rem] m-4">Tools I Use</h2>

      <div className="container min-w-full h-[10rem] mb-8">
        <Gallery />
      </div>
    </section>
  );
};

export default AboutMe;
