import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science - AIML, Grade: 7.84",
      institution: "Gyan Ganga Institute of Technology and Sciences, Jabalpur",
      duration: "2022 - 2026",
      type: "Undergraduate",
    },
    {
      degree: "Class XII",
      field: "PCM, Grade: 93%",
      institution: "Board of Higher Secondary Education, Madhya Pradesh",
      duration: "2021 - 2022",
      type: "Higher Secondary",
    },
    {
      degree: "Class X",
      field: "Grade: 97%",
      institution: "Board of Secondary Education, Madhya Pradesh",
      duration: "2019 - 2020",
      type: "Secondary",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Journey</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-green-600 to-blue-600"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-green-600 to-blue-600"></div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="relative mb-12 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8`}>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="inline-block px-6 py-2 mb-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-green-600 to-blue-600">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      {edu.duration}
                    </div>
                  </div>

                  <div className="absolute left-0 z-10 w-6 h-6 transform bg-white border-4 border-green-600 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ml-8 md:ml-0`}>
                    <div className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 text-white rounded-lg bg-gradient-to-r from-green-600 to-blue-600">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-green-700 rounded-full bg-gradient-to-r from-green-50 to-blue-50">
                            {edu.type}
                          </span>
                          <h3 className="mb-2 text-2xl font-bold text-gray-800">{edu.degree}</h3>
                          {edu.field && (
                            <p className="mb-3 text-lg font-semibold text-blue-600">{edu.field}</p>
                          )}
                          <p className="leading-relaxed text-gray-700">{edu.institution}</p>
                        </div>
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

export default Education;
