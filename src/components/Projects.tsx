import React from 'react';
import { ExternalLink, Github, Calendar, Users, Cpu, Eye, Volume2, Presentation, Video, Shield, Monitor, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Reconnect – Real-Time Video Calling Application',
      period: 'Aug 2025',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.IO', 'JWT', 'TailwindCSS'],
      description: 'Built a Zoom-like video calling app supporting 1-to-1 and group calls using WebRTC and Socket.IO.',
      features: [
        {
          icon: Video,
          title: 'WebRTC Integration',
          description: 'Implemented real-time peer-to-peer connections for video/audio streaming with STUN/TURN servers to handle NAT/firewall traversal'
        },
        {
          icon: Monitor,
          title: 'Interactive UI Features',
          description: 'Integrated React.js for an interactive UI with call join/leave, mute/unmute, and screen-sharing features'
        },
        {
          icon: Shield,
          title: 'Secure Backend',
          description: 'Developed a secure backend with Node.js + Express to manage signaling and user sessions'
        },
        {
          icon: Zap,
          title: 'JWT Authentication',
          description: 'Implemented JWT authentication to protect meeting rooms and handle user identity'
        }
      ],
      impact: 'Created a professional-grade video conferencing solution with enterprise-level security and performance',
      type: 'Web Application',
      color: 'from-green-600 to-blue-600'
    },
    {
      title: 'Vagaamaya – Hand Gesture Recognition Prototype',
      period: 'Aug 2024 – Dec 2024',
      technologies: ['Flask', 'OpenCV', 'Deep Learning (CNN)', 'Text-to-Speech (TTS)'],
      description: 'A real-time gesture recognition system aimed at aiding communication for the hearing impaired, emphasizing social impact and accessibility.',
      features: [
        {
          icon: Cpu,
          title: 'CNN Deep Learning',
          description: 'Designed and trained a Convolutional Neural Network to classify static hand gestures with high accuracy'
        },
        {
          icon: Eye,
          title: 'Real-time Detection',
          description: 'Integrated OpenCV for gesture detection with smooth client-server communication'
        },
        {
          icon: Volume2,
          title: 'Text-to-Speech',
          description: 'Implemented TTS engine to convert recognized gestures into spoken language'
        },
        {
          icon: Presentation,
          title: 'Live Presentation',
          description: 'Presented fully functional prototype at APS Project Expo 2024'
        }
      ],
      impact: 'Enhanced accessibility and communication for hearing-impaired individuals through innovative AI technology',
      type: 'Social Impact Project',
      color: 'from-blue-600 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work in web development and AI-powered solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} text-white p-8`}>
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-blue-100">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">{project.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Users className="w-5 h-5" />
                    <span>{project.type}</span>
                  </div>
                </div>
                
                <p className="text-xl leading-relaxed text-blue-50">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-8 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full border border-blue-200 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="text-2xl font-semibold text-gray-900 mb-8">Key Features & Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {project.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h5>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                  <h5 className="text-lg font-semibold text-green-800 mb-3">Project Impact</h5>
                  <p className="text-green-700 leading-relaxed">{project.impact}</p>
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