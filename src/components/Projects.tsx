import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Resumind - AI Resume Analyzer",
      description:
        "A full-stack, serverless web application that increases resume shortlisting by 70% through actionable feedback and ATS optimization",
      tech: ["React.js", "Puter.js", "Tailwind CSS", "Claude API"],
      github: "https://github.com/Devang-10/AI-Resume-Analyzer",
      demo: "https://ai-resume-analyzer-kappa-two.vercel.app/",
      image: "/Resumind.png",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Code Reviewer",
      description:
        "An AI-driven code review web app, providing real-time intelligent and structured feedback with Gemini API. It can be used to achieve 60% higher code quality.",
      tech: ["React.js", "Node.js", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/Devang-10/ai-code-reviewer",
      demo: "https://ai-code-reviewer-1-tudw.onrender.com/",
      image: "/Ai-code.png",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "RESTExplorer",
      description:
        "A dynamic SPA with React and Tailwind CSS to fetch and display live data from the public REST Countries API. Built an interactive UI, featuring live search and regional filtering for intuitive data discovery",
      tech: ["React.js", "Tailwind CSS", "REST API"],
      github: "https://github.com/Devang-10/RESTExplorer",
      demo: "https://rest-explorer-lime.vercel.app/",
      image: "/RESTExplorer.png",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Showcasing my best work in AI-powered applications and full-stack
            development
          </p>
        </div>

        <div className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute flex gap-2 top-4 right-4">
                  <a
                    href={project.github}
                    className="p-2 text-gray-700 transition-colors bg-white rounded-lg shadow-lg hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 text-gray-700 transition-colors bg-white rounded-lg shadow-lg hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white`}
                  >
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {project.title}
                  </h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium text-gray-700 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
