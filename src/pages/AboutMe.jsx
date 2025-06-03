import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const AboutMe = () => {
  const Tools = [
    { id: 1, name: "HTML", img: "images/html.png" },

    { id: 2, name: "CSS", img: "images/css.png" },

    { id: 3, name: "javaScript", img: "images/js.png" },
  ];

  return (
    <section
      id="about"
      className="w-full h-fit flex flex-col items-center py-8 bg-black"
    >
      <h2 className="text-gray-600 text-[2.5rem] font-bold">Hello!</h2>

      {/* <img
        src="/images/hello.gif"
        alt=""
        className="w-[80%] h-[20rem]"
      /> */}

      <div className="w-[90%] px-4 py-5 rounded-[15px]  ">
        <p className="text-white">
          I'm <span className=' font-bold text-gray-600'>Perpetual Asogwa</span>. A results-driven frontend developer specializing in building fast,
          responsive, and accessible web applications that help businesses grow
          and connect with their users. With a strong command of React, Tailwind
          CSS, and modern UI/UX best practices, I turn ideas into polished
          digital products that deliver real value. Whether you're launching a
          new platform or improving an existing one, I bring both technical
          expertise and a problem-solving mindset to help you move faster and
          convert better.</p>

<p>Check me out at:</p>
          <div className="w-full h-[3rem] flex justify-around items-center mt-3">

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
        
      </div>

      <h2 className="text-white text-[2rem] m-4">Tools I Use</h2>

      <div className="container min-w-full h-[10rem] mb-8"></div>
    </section>
  );
};

export default AboutMe;
