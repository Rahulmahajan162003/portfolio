import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in Computer Science and Artificial Intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>
            
            {/* Education Card */}
            <div className="relative">
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">B.Tech in Computer Science Engineering</h3>
                      <p className="text-lg text-blue-600 font-semibold">Artificial Intelligence and Machine Learning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-blue-200">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900 font-semibold">GPA: 7.5/10.0</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Keshav Memorial Institute of Technology, Hyderabad</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Aug 2022 – Present</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Specialization in AI & ML</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-gray-700">Strong Academic Performance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">Active in Project Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">NSS Volunteer Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;