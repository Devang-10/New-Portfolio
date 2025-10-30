import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Intern',
      company: 'codeUp Learning',
      duration: 'March 2025 – April 2025',
      location: 'Jabalpur, India',
      description: [
        'Contributed to the development of a LMS site as part of a 5-member team under the guidance of a Team Leader.',
        'Gained practical experience in both front-end and back-end web development, utilizing React, Node.js, and Tailwind CSS.',
      ],
      skills: ['React.js', 'Node.js', 'Tailwind CSS', 'Git', 'Github']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative mb-12 animate-fade-in-up">
                <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <div className="inline-block px-6 py-2 mb-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="absolute left-0 z-10 w-6 h-6 transform bg-white border-4 border-blue-600 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

                  <div className="ml-8 md:w-1/2 md:pl-12 md:ml-0">
                    <div className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                          <p className="text-xl font-semibold text-blue-600">{exp.company}</p>
                          <p className="flex items-center gap-2 mt-1 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <ul className="mb-6 space-y-3">
                        {exp.description.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex gap-3 text-gray-700">
                            <span className="font-bold text-blue-600">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-4 py-2 text-sm font-semibold text-blue-700 rounded-full bg-gradient-to-r from-blue-50 to-purple-50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
