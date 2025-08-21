import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Computer Science Student & AI Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Tadikamalla
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Rahul Mahajan
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 h-12">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-300 mb-12">
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Dedicated Computer Science student passionate about guiding IT professionals using my software development knowledge. 
              Skilled in communication, teamwork, and providing tailored solutions while staying updated with industry trends.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/Rahulmahajan162003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/rahulmahajan16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="mailto:trahulmahajan@gmail.com"
              className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            
            <a
              href="tel:+916302961835"
              className="flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>
          </div>

          <div className="animate-fade-in-up animation-delay-900">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <span>Learn more about me</span>
              <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;