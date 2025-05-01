const Projects = () => {
  const projects = [
    {
      img: "/images/aichat.png",
      name: "AI Document Analyser UI",
      tools: ["Nextjs", "Tailwindcss", "Typescript"],
      about: "A User Interface for an AI Document Analyser",
      url: "https://ai-chat-ui-lemon.vercel.app",
    },
    {
      img: "/images/cardify.png",
      name: "Cardify",
      tools: ["React", "Tailwindcss"],
      about:
        "A card generator site that allows users create iD cards, business cards using available templates",
      url: "https://cardify-theta.vercel.app",
    },
    {
      img: "/images/color-guessing-game.png",
      name: "Color Guessing Game",
      tools: ["React", "CSS"],
      about:
        "A fun game that requires you to guess a preselected color from a list of colors",
      url: "https://color-guessing-game-jade.vercel.app",
    },
    {
      img: "/images/animal-fact-app.png",
      name: "Animal Fact App",
      tools: ["React", "Tailwindcss", "API"],
      about: "A fun app that provides random facts about animals",
      url: "https://animal-fact-app.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-m-4 w-full h-fit flex flex-col items-center pb-4"
    >
      <h2 className="text-white text-[2rem] m-4">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full h-fit border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mb-4"
        >
          <img
            src={project.img}
            className="w-full h-[10rem] object-cover rounded-t-[1rem]"
          />
          <p className="text-white text-xl font-bold mt-2 mb-4">
            {project.name}
          </p>
          <p className="text-white text-center">{project.about}</p>
          <p className="text-gray-500 text-[1.1rem]">
            {project.tools.join(", ")}
          </p>

          <a
            href={project.url}
            target="_blank"
            className="bg-gray-400 p-1 rounded-[5px] border-none outline-none mb-2 mt-2 ml-[15rem]"
          >
            view live
          </a>
        </div>
      ))}
    </section>
  );
};
export default Projects;
