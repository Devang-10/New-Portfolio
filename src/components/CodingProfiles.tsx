import { Code2, Trophy, Target, Award } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'Codolio',
      icon: <Award className="w-8 h-8" />,
      url: 'https://codolio.com/profile/Devang_10',
      color: 'from-purple-500 to-pink-500',
      description: 'Coding Portfolio'
    },
    {
      name: 'LeetCode',
      icon: <Code2 className="w-8 h-8" />,
      url: 'https://leetcode.com/u/code_d_33/',
      color: 'from-yellow-500 to-orange-500',
      description: 'Problem Solving'
    },
    {
      name: 'CodeChef',
      icon: <Trophy className="w-8 h-8" />,
      url: 'https://www.codechef.com/users/code_d_101',
      color: 'from-amber-600 to-yellow-600',
      description: 'Competitive Coding'
    },
    {
      name: 'Codeforces',
      icon: <Target className="w-8 h-8" />,
      url: 'https://codeforces.com/profile/-faith-',
      color: 'from-blue-500 to-blue-700',
      description: 'Contest Platform'
    },
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">Programming</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-pink-600"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Active across multiple competitive programming platforms, continuously improving problem-solving skills
          </p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-8 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-3">
                <div className={`inline-block p-6 rounded-2xl bg-gradient-to-r ${profile.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {profile.icon}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-gray-800 transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600">
                  {profile.name}
                </h3>

                <p className="mb-4 text-sm text-gray-600">
                  {profile.description}
                </p>

                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${profile.color} text-white text-sm font-semibold group-hover:shadow-lg transition-shadow duration-300`}>
                  View Profile
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* <div className="max-w-4xl p-8 mx-auto mt-16 border border-orange-100 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 text-white rounded-lg bg-gradient-to-r from-orange-600 to-pink-600">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Achievements & Stats</h3>
          </div>
          <p className="leading-relaxed text-gray-700">
            Actively participating in competitive programming contests and challenges. Continuously working on improving algorithmic thinking, optimization techniques, and problem-solving efficiency across various difficulty levels.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default CodingProfiles;
