import React from 'react';
import { Award, Trophy, Heart, Calendar, MapPin, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'APS Project Expo 2024 (KMIT)',
      date: 'December 2024',
      location: 'Keshav Memorial Institute of Technology',
      description: 'Presented the Vagaamaya project, highlighting the ability to explain complex technical solutions in an accessible manner.',
      type: 'Project Presentation',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Award,
      title: 'TCS iON Career Edge - Young Professional',
      date: 'April 2025',
      location: 'TCS iON Platform',
      description: 'Successfully completed the Young Professional certification program, demonstrating readiness for professional IT roles.',
      type: 'Professional Certification',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Heart,
      title: 'NSS Volunteer - Scribe for Visually Impaired Student',
      date: 'June 2024',
      location: 'KMIT NSS Unit',
      description: 'Supported a visually impaired student as a scribe, helping them write their semester exams and demonstrating commitment to social service.',
      type: 'Social Service',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence, technical innovation, and social contribution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-8 border ${achievement.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                {/* Icon and Type */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200">
                    {achievement.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {achievement.title}
                </h3>

                {/* Date and Location */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{achievement.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{achievement.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Impact Summary</h3>
            <p className="text-gray-600">A snapshot of my contributions and achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600">Major Achievements</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">People Impacted</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-gray-600">Social Impact Project</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;