import {
  React,
  Firebase,
  HTML5,
  CSS3,
  TailwindCSS,
  JavaScript,
  Git,
  GitHubLight,
  Supabase,
  LinkedIn,
  XLight,
} from "developer-icons";

const AboutMe = () => {
  const Tools = [
    { id: 1, name: "HTML", icon: HTML5 },
    { id: 2, name: "CSS", icon: CSS3 },
    { id: 3, name: "JavaScript", icon: JavaScript },
    { id: 4, name: "Tailwind CSS", icon: TailwindCSS },
    { id: 5, name: "React", icon: React },
  ];

  const Tools2 = [
    { id: 1, name: "Git", icon: Git },
    { id: 2, name: "GitHub", icon: GitHubLight },
    { id: 3, name: "Supabase", icon: Supabase },
    { id: 4, name: "Firebase", icon: Firebase },
  ];

  const socialLinks = [
    { icon: GitHubLight, url: "https://github.com/Uche44" },
    { icon: XLight, url: "https://x.com/perpetualuchec5" },
    {
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/perpetual-uchechukwu-798b51262/",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center py-8 bg-black"
    >
      <h2 className="text-gray-600 text-[2.5rem] font-bold">Hello!</h2>

      {/* <img
        src="/images/hello.gif"
        alt=""
        className="w-[80%] h-[20rem]"
      /> */}

      <div className="w-[90%] px-4 py-5 rounded-[15px]  ">
        <p className="text-white text-center text-[1.2rem] md:w-[60%] mx-auto">
          I'm <span className=" font-bold text-gray-600">Perpetual Asogwa</span>
          . A results-driven frontend developer specializing in building fast,
          responsive, and accessible web applications that help businesses grow
          and connect with their users. With a strong command of React, Tailwind
          CSS, and modern UI/UX best practices, I turn ideas into polished
          digital products that deliver real value. Whether you're launching a
          new platform or improving an existing one, I bring both technical
          expertise and a problem-solving mindset to help you move faster and
          convert better.
        </p>
      </div>
      <p className="text-white font-bold text-2xl">Check me out at:</p>

      <div className="w-full h-[3rem] flex justify-around items-center mt-6 px-8 md:w-[50%]">
        {socialLinks.map(({ icon: Icon, url }, i) => (
          <a
            href={url}
            target="_blank"
            key={i}
          >
            <Icon className="h-[3rem] text-white" />
          </a>
        ))}
      </div>

      <h2 className="text-white text-[2rem] m-4 font-">SkillSet</h2>
      <h3 className="text-center text-white font-bold text-3xl">Languages</h3>
      <div className="container w-full h-[10rem] mb-8">
        <div className="w-full h-fit flex flex-col gap-4 px-4 py-6 rounded-[15px] md:grid md:grid-cols-2 md:gap-6 md:px-20">
          {Tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="w-full h-[4rem] flex justify-between items-center bg-gray-600 rounded-[10px] px-4 hover:bg-gray-500 transition-all duration-300 md:hover:scale-105 md:h-[5.3rem] md:px-6"
              >
                <Icon className="h-[3rem] text-white" />
                <span className="text-white text-[1.2rem]">{tool.name}</span>
              </div>
            );
          })}
        </div>

        <h3 className="text-center text-white font-bold text-3xl">
          Tools & Platforms
        </h3>
        <div className="w-full h-fit flex flex-col gap-4 px-4 py-6 rounded-[15px] md:grid md:grid-cols-2 md:gap-6 md:px-20">
          {Tools2.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="w-full h-[4rem] flex justify-between items-center bg-gray-600 rounded-[10px] px-4 hover:bg-gray-500 transition-all duration-300 md:h-[5.3rem] md:px-6"
              >
                <Icon className="h-[3rem] text-white" />
                <span className="text-white text-[1.2rem]">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
