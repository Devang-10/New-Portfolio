import { Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5OC00SDQ0YzIuMjEgMCA0IDEuNzkgNCAzLjk5OFY0MGMwIDIuMjEtMS43OSA0LTMuOTk4IDRINDBjLTIuMjEgMC00LTEuNzktNC0zLjk5OFYzNHptLTEyIDBjMC0yLjIxIDEuNzktNCAzLjk5OC00SDMyYzIuMjEgMCA0IDEuNzkgNCAzLjk5OFY0MGMwIDIuMjEtMS43OSA0LTMuOTk4IDRIMjhjLTIuMjEgMC00LTEuNzktNC0zLjk5OFYzNHptMC0xMmMwLTIuMjEgMS43OS00IDMuOTk4LTRIMzJjMi4yMSAwIDQgMS43OSA0IDMuOTk4VjI4YzAgMi4yMS0xLjc5IDQtMy45OTggNEgyOGMtMi4yMSAwLTQtMS43OS00LTMuOTk4VjIyem0xMiAwYzAtMi4yMSAxLjc5LTQgMy45OTgtNEg0NGMyLjIxIDAgNCAxLjc5IDQgMy45OThWMjhjMCAyLjIxLTEuNzkgNC0zLjk5OCA0SDQwYy0yLjIxIDAtNC0xLjc5LTQtMy45OThWMjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex-1 space-y-6 text-white animate-fade-in-up">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                Devang Jain
              </span>
            </h1>
            <p className="text-xl font-light text-gray-100 md:text-2xl">
              Full Stack Developer & Competitive Programmer
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-200">
              Building impactful digital solutions, I combine robust full-stack
              web development with integrated AI features. My expertise in data
              structures, algorithms, and scalable MERN stack applications
              allows me to create highly functional and innovative user
              experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 font-semibold text-purple-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#coding-profiles"
                className="px-8 py-3 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-purple-600 hover:scale-105"
              >
                View Coding Profiles
              </a>
              <a
                href="#contact"
                className="px-8 py-3 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-purple-600 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/Devang-10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 transform hover:text-yellow-200 hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/devangjain10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 transform hover:text-yellow-200 hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://codolio.com/profile/Devang_10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 transform hover:text-yellow-200 hover:scale-110"
              >
                <Code size={28} />
              </a>
              {/* <a
                href="mailto:your.email@example.com"
                className="text-white transition-all duration-300 transform hover:text-yellow-200 hover:scale-110"
              >
                <Mail size={28} />
              </a>
              <a
                href="#"
                className="text-white transition-all duration-300 transform hover:text-yellow-200 hover:scale-110"
              >
                <FileText size={28} />
              </a> */}
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-yellow-400 to-pink-400 blur-2xl animate-pulse"></div>
              <div className="relative w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-2xl md:w-80 md:h-80">
                <img
                  src="/Photo.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
        <a href="#experience" className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
