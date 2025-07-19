import React from 'react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  const education = {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Birla Institute of Technology and Science, Pilani",
    location: "Goa, India",
    period: "2022 - 2026",
    coursework: [
      "Reinforcement Learning",
      "Generative AI", 
      "Natural Language Processing",
      "Foundations of Data Science",
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Database Systems",
      "Design and Analysis of Algorithms",
      "Discrete Structures in Computer Science",
      "Logic in Computer Science",
      "Theory of Computation"
    ]
  };

  const onlineCourses = [
    {
      title: "DeepMind x UCL: Deep Learning Lectures",
      provider: "DeepMind & University College London",
      icon: "🧠"
    },
    {
      title: "DeepMind x UCL: Reinforcement Learning Lectures", 
      provider: "DeepMind & University College London",
      icon: "🎮"
    },
    {
      title: "CS229 Stanford ML",
      provider: "Stanford University",
      icon: "🏛️"
    },
    {
      title: "CS50's Introduction to AI with Python",
      provider: "Harvard University",
      icon: "🐍"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            <span className="text-gradient-ocean">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning in computer science and artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                      <h4 className="text-primary-400 text-lg font-semibold mb-1">{education.institution}</h4>
                      <p className="text-gray-400">{education.location}</p>
                      <p className="text-accent-400 font-medium mt-2">{education.period}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="w-full h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏛️</div>
                      <p className="text-gray-300 text-sm">BITS Pilani</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework:</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-gray-300 text-sm hover:bg-white/20 transition-all cursor-default"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Online Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Continuous <span className="text-gradient-ocean">Learning</span>
              </h3>
              <p className="text-gray-400">Specialized online courses and certifications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{course.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2 leading-tight">
                        {course.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{course.provider}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="glass rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Academic Highlights</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-400 mb-2">4</div>
                  <p className="text-gray-300">Years of Study</p>
                  <p className="text-gray-500 text-sm mt-1">2022-2026</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-400 mb-2">15+</div>
                  <p className="text-gray-300">Courses Completed</p>
                  <p className="text-gray-500 text-sm mt-1">Core & Electives</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">CS</div>
                  <p className="text-gray-300">Major Focus</p>
                  <p className="text-gray-500 text-sm mt-1">Computer Science</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;