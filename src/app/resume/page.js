"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  FaUser, FaPhone, FaEnvelope, FaGithub, FaMapMarkerAlt, 
  FaUserCircle, FaBriefcase, FaGraduationCap, FaCode,
  FaLaptopCode, FaMobileAlt, FaShoppingCart, FaCalendarCheck,
  FaUniversity, FaSchool, FaCalendarAlt, FaSpinner, FaLightbulb,
  FaPaintBrush, FaServer, FaTools, FaMoon, FaSun, FaUserTie,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase,
  FaPaperPlane, FaCloudUploadAlt, FaExchangeAlt, FaShieldAlt,
  FaRocket, FaWind
} from 'react-icons/fa';
import Image from 'next/image';

export default function Resume() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Add particle effect styles (only for desktop)
    if (!isMobile) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideDown {
          from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateX(-50%) translateY(0); opacity: 1; }
          to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
      `;
      document.head.appendChild(style);

      // Add click particle effect (only for desktop)
      const handleClick = (e) => {
        createParticleEffect(e.clientX, e.clientY);
      };

      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(`Copied: ${text}`);
    } catch (err) {
      showNotification('Could not copy to clipboard');
    }
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 15px 25px;
      border-radius: 25px;
      font-weight: 500;
      z-index: 1001;
      animation: slideDown 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

  const createParticleEffect = (x, y) => {
    // Only create particles on desktop
    if (isMobile) return;
    
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        left: ${x}px;
        top: ${y}px;
      `;
      
      document.body.appendChild(particle);
      
      const angle = (i / 5) * Math.PI * 2;
      const velocity = 2 + Math.random() * 3;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let opacity = 1;
      let posX = 0;
      let posY = 0;
      
      const animate = () => {
        posX += vx;
        posY += vy;
        opacity -= 0.02;
        
        particle.style.transform = `translate(${posX}px, ${posY}px)`;
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }
  };

  const contactItems = [
    { icon: FaPhone, text: '+92 3226409363', action: () => copyToClipboard('+92 3226409363') },
    { icon: FaEnvelope, text: 'mirzazan3334@gmail.com', action: () => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mirzazan3334@gmail.com', '_blank') },
    { icon: FaGithub, text: 'github.com/mzain4321', action: () => window.open('https://github.com/mzain4321', '_blank') },
    { icon: FaMapMarkerAlt, text: 'Gujrat, Punjab, Pakistan', action: null }
  ];

  const experiences = [
    {
      title: 'Web Developer',
      company: 'Software House(Cybersilo)',
      date: 'Ongoing',
      icon: FaLaptopCode,
      companyIcon: FaUserTie,
      dateIcon: FaCalendarAlt,
      description: 'Web Development: Working as a Web Developer utilizing React and Laravel, collaborating with the team to build and maintain various web projects.',
      projectIcon: FaBriefcase
    },
    {
      title: 'Web App Developer',
      company: 'TrustBridge AI',
      date: 'July 2025 - Ongoing',
      icon: FaLaptopCode,
      companyIcon: FaUserTie,
      dateIcon: FaCalendarAlt,
      description: 'TrustBridge AI: Developing a web application using React and Node.js that facilitates collaboration and investment between entrepreneurs and investors. The platform also enables supporters to contribute to cause campaigns.',
      projectIcon: FaBriefcase
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Freelance work',
      date: 'March 2025',
      icon: FaLaptopCode,
      companyIcon: FaUserTie,
      dateIcon: FaCalendarAlt,
      description: 'Gujrat Fans (Deployed): As a freelance developer, I built a single-page e-commerce platform for Gujrat Fans using Next.js, designed to showcase products and info about organization. The application is deployed on Vercel for performance and scalability.',
      projectIcon: FaShoppingCart,
      link: 'https://gujrat-fans.vercel.app/'
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Freelance work',
      date: 'January 2025',
      icon: FaLaptopCode,
      companyIcon: FaUserTie,
      dateIcon: FaCalendarAlt,
      description: 'Event Management Web Application: Developed a platform for creating and managing local events using Next.js and MongoDB. Included features like event listings, booking system, and an admin control panel for event organizers.',
      projectIcon: FaCalendarCheck
    },
    
  ];

  const skillCategories = [
    {
      title: 'Frontend & Languages',
      icon: FaPaintBrush,
      skills: [
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript (ES6+)', icon: FaJsSquare },
        { name: 'React.js', icon: FaReact },
        { name: 'Next.js', icon: FaRocket },
        { name: 'Tailwind CSS', icon: FaWind }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: FaServer,
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: FaDatabase },
        { name: 'Supabase', icon: FaDatabase }, 
        { name: 'RESTful APIs', icon: FaExchangeAlt },
        { name: 'JWT Authentication', icon: FaShieldAlt }
      ]
    },
    {
      title: 'Tools & Deployment',
      icon: FaTools,
      skills: [
        { name: 'GitHub', icon: FaGithub },
        { name: 'Postman', icon: FaPaperPlane },
        { name: 'Vercel', icon: FaCloudUploadAlt }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Zain Imran - Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Web Developer specializing in Next.js, MongoDB, and MERN Stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>

      <div className={`min-h-screen transition-all duration-300 ${
        isDarkTheme 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100' 
          : 'bg-gradient-to-br from-indigo-400 to-purple-600'
      }`}>
        {/* Floating Shapes - Only show on desktop */}
        {!isMobile && (
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute w-24 h-24 bg-white bg-opacity-10 rounded-full top-1/5 left-1/12 animate-pulse"></div>
            <div className="absolute w-36 h-36 bg-white bg-opacity-10 rounded-full top-3/5 right-1/12 animate-pulse animation-delay-2000"></div>
            <div className="absolute w-20 h-20 bg-white bg-opacity-10 rounded-full bottom-1/5 left-1/5 animate-pulse animation-delay-4000"></div>
          </div>
        )}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="fixed top-5 right-5 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl hover:scale-110 hover:rotate-180 transition-all duration-300 z-50 flex items-center justify-center"
        >
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </button>

        <div className="container mx-auto px-5 py-5 max-w-6xl">
          <div className={`${
            isDarkTheme 
              ? 'bg-gray-800 bg-opacity-95' 
              : 'bg-white bg-opacity-95'
          } backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden ${!isMobile ? 'animate-fade-in' : ''}`}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 md:p-10 text-center relative overflow-hidden">
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-40 h-40 md:w-50 md:h-50 mx-auto mb-5 rounded-full overflow-hidden shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Image
                    width={208}
                    height={280}
                    src="/mypic.jpg" 
                    alt="Zain Imran" 
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">ZAIN IMRAN</h1>
                <p className="text-lg md:text-xl opacity-90 mb-6">Full-Stack Web Developer | Next.js, MongoDB, MERN Stack Enthusiast</p>
                
                // Update the entire contact section with a grid layout
<div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-8 max-w-2xl mx-auto">
  {contactItems.map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-2 text-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer p-2 rounded-lg ${
        isDarkTheme ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
      }`}
      onClick={item.action}
    >
      <item.icon className="flex-shrink-0" />
      <span className={`truncate ${index === 3 ? 'block' : 'hidden md:block'}`}>
        {item.text}
      </span>
      <span className={`${index === 3 ? 'hidden' : 'md:hidden'} truncate`}>
        {index === 0 ? 'Call' : index === 1 ? 'Email' : 'GitHub'}
      </span>
    </div>
  ))}
</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-5 md:p-10">
              {/* Professional Summary */}
              <section className="mb-8 md:mb-10">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-5 pb-2 md:pb-3 border-b-4 border-indigo-500 flex items-center gap-3 ${
                  isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  <FaUserCircle /> Professional Summary
                </h2>
                <div className={`text-base md:text-lg leading-relaxed p-4 md:p-6 rounded-2xl border-l-4 border-indigo-500 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200' 
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600'
                }`}>
                  Full-Stack Web Developer with practical experience in creating modern web applications using Next.js, MongoDB, and Vercel, enabling efficient server-side rendering and smooth deployment. Actively expanding skills by working on projects with the MERN stack (MongoDB, Express.js, React.js, Node.js) to deepen expertise in full-stack development. Knowledgeable in building RESTful APIs, working with MySQL databases, deploying applications using Vercel, and integrating SaaS tools. Committed to writing clean, maintainable code and contributing to open-source projects to develop scalable and high-performance solutions.
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8 md:mb-10">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-5 pb-2 md:pb-3 border-b-4 border-indigo-500 flex items-center gap-3 ${
                  isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  <FaBriefcase /> Experience
                </h2>
                
                <div className="space-y-4 md:space-y-5">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      onClick={() => exp.link && window.open(exp.link, '_blank')}
                      className={`p-4 md:p-6 rounded-2xl shadow-lg ${!isMobile ? 'hover:-translate-y-2 hover:shadow-xl' : ''} transition-all duration-300 border-l-4 border-transparent ${!isMobile ? 'hover:border-indigo-500' : ''} cursor-pointer ${
                        isDarkTheme ? 'bg-gray-700' : 'bg-white'
                      }`}
                    >
                      <div className={`text-lg md:text-xl font-semibold mb-2 flex items-center gap-2 ${
                        isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        <exp.icon /> {exp.title}
                      </div>
                      <div className="text-indigo-500 font-medium mb-2 flex items-center gap-2">
                        <exp.companyIcon /> {exp.company}
                      </div>
                      <div className={`text-xs md:text-sm mb-3 md:mb-4 flex items-center gap-2 ${
                        isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <exp.dateIcon /> {exp.date}
                      </div>
                      <div className={`leading-relaxed text-sm md:text-base ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <strong className="flex items-center gap-2">
                          <exp.projectIcon /> {exp.description.split(':')[0]}:
                        </strong>
                        {exp.description.split(':').slice(1).join(':')}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="mb-8 md:mb-10">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-5 pb-2 md:pb-3 border-b-4 border-indigo-500 flex items-center gap-3 ${
                  isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  <FaGraduationCap /> Education
                </h2>
                
                <div className={`p-4 md:p-6 rounded-2xl shadow-lg ${!isMobile ? 'hover:-translate-y-2 hover:shadow-xl' : ''} transition-all duration-300 ${
                  isDarkTheme ? 'bg-gray-700' : 'bg-white'
                }`}>
                  <div className={`text-lg md:text-xl font-semibold mb-2 flex items-center gap-2 ${
                    isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    <FaUniversity /> Bachelor of Science: Computer Science
                  </div>
                  <div className="text-indigo-500 font-medium mb-2 flex items-center gap-2">
                    <FaSchool /> ARID AGRICULTURE UNIVERSITY
                  </div>
                  <div className={`text-xs md:text-sm mb-3 md:mb-4 flex items-center gap-2 ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <FaCalendarAlt /> 2022 - Ongoing
                  </div>
                  <div className={`leading-relaxed text-sm md:text-base flex items-center gap-2 ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <FaLightbulb /> Gaining advanced knowledge in this field while developing projects and gaining practical experience through academic and industry collaborations.
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-5 pb-2 md:pb-3 border-b-4 border-indigo-500 flex items-center gap-3 ${
                  isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  <FaCode /> Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {skillCategories.map((category, index) => (
                    <div
                      key={index}
                      className={`p-4 md:p-6 rounded-2xl shadow-lg ${!isMobile ? 'hover:-translate-y-2' : ''} transition-all duration-300 ${
                        isDarkTheme ? 'bg-gray-700' : 'bg-white'
                      }`}
                    >
                      <h4 className={`font-semibold mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2 ${
                        isDarkTheme ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        <category.icon /> {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium ${!isMobile ? 'hover:scale-110' : ''} transition-transform duration-300 cursor-pointer flex items-center gap-1 md:gap-2"
                          >
                            <skill.icon className="text-xs md:text-base" /> <span>{skill.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Only apply animations on desktop */
        @media (min-width: 768px) {
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}