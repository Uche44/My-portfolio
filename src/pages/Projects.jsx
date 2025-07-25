import { GitHubLight } from "developer-icons";

const Projects = () => {
  const projects = [
    // {
    //   img: "/images/color-guessing-game.png",
    //   name: "SabiMyRights",
    //   tools: ["React", "JavaScript", "TailwindCSS", "Firebase"],
    //   about:
    //     "A fun game that requires you to guess a preselected color from a list of colors",
    //   url: "https://id-generator-chi.vercel.app/",
    //   github: "https://github.com/Uche44/sabi-rights",
    // },
    {
      img: "/images/aichat.png",
      name: "AI Document Analyser UI",
      tools: ["Nextjs", "Tailwindcss", "Typescript"],
      about: "A User Interface for an AI powered Document Analyser application",
      url: "https://ai-chat-ui-lemon.vercel.app",
      github: "https://github.com/Uche44/ai-chat-ui",
    },
    {
      img: "/images/cart.png",
      name: "Interactive Cart",
      tools: ["React", "Tailwindcss"],
      about:
        "An Food delivery cart that allows users to add, remove, update items and checkout in their cart",
      url: "https://interactive-cart-lilac.vercel.app/",
      github: "https://github.com/Uche44/interactive-cart",
    },
    {
      img: "/images/card.png",
      name: "ID Card Generator",
      tools: ["React", "CSS", "Html-2-canvas", "jspdf"],
      about:
        "An ID card generator that allows users to create and download ID cards with custom information",
      url: "https://id-generator-chi.vercel.app/",
      github: "https://github.com/Uche44/ID-generator",
    },
    {
      img: "/images/animal-fact-app.png",
      name: "Animal Fact App",
      tools: ["React", "Tailwindcss", "API"],
      about: "A fun app that provides random facts about animals",
      url: "https://animal-fact-app.vercel.app",
      github: "https://github.com/Uche44/Animal-Fact-App",
    },
  ];

  return (
    <>

      <h2 className="text-gray-600 text-[2.5rem] font-bold text-center mt-8 mb-4">
        My Projects
      </h2>

      <section
        id="projects"
        className="scroll-m-4 w-full h-fit flex flex-col items-center pb-4 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
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
            <div className="w-full h-fit flex justify-between px-4 items-center mt-6 mb-4">
              <a
                href={project.url}
                target="_blank"
                className="font-semibold text-underline text-white border-none outline-none mb-2 mt-2"
              >
                view live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="bg-gray-600 py-1 rounded-[5px] border-none outline-none "
              >
                <GitHubLight className="h-[2rem] text-white" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Projects;
