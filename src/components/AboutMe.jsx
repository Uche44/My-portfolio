// import AliceCarousel from "react-alice-carousel";
import { Gallery } from "./Tools";
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
    <section className="w-full h-fit flex flex-col items-center pb-4">
      <h2 className="text-white text-[2rem] mb-4">About Me</h2>
      <div className="w-[90%] px-4 py-5 rounded-[15px]  bg-gradient-to-r from-[#131b1a] via-black to-[#131b1a] animate-gradient">
        <p className="text-white">
          Hi! I'm Perpetual Asogwa, a passionate Frontend developer who turns
          ideas into interactive, user-friendly experiences. I blend exquisite
          design with impeccable functionality for an exceptional user
          experience. Hit me up and let&apos;s
          create something amazing!
        </p>
      </div>

      <h2 className="text-white text-[2rem] m-4">Tools I Use</h2>

      <div className="container min-w-full h-[10rem] mb-8">
        <Gallery />

        {/* <div className="first-row h-1/2 w-full flex gap-2">
          {Tools.map((tool, id) => (
            <div className="flex flex-col items-center w-1/3 h-full border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem]">
              <img
                key={id}
                src={tool.img}
                className="h-[6rem] w-full"
              />
              <p className="text-white -mt-2">{tool.name}</p>
            </div>
          ))}
        </div>
        <div className="second-row flex h-1/2 w-full mt-2 gap-2">
          {Tools2.map((tool, id) => (
            <div className="flex flex-col items-center w-1/3 h-full border-2  border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem]">
              <img
                key={id}
                src={tool.img}
                className="h-[6rem] w-full"
              />
              <p className="text-white -mt-2">{tool.name}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
