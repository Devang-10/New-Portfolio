import { Code2, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Fundamentals",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: ["C++", "Python", "Node.js", "SQL", "JavaScript", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frameworks & Tools",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        "React.js",
        "Tailwind CSS",
        "Git",
        "Github",
        "Postman",
        "VS Code",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="mb-6 text-2xl font-bold text-gray-800">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3 text-gray-700 transition-colors group-hover:text-gray-900"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
