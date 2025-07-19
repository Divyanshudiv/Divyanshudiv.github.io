import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "Java", "SQL", "LaTeX", "JavaScript", "TypeScript"],
      icon: "💻",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI/ML Frameworks",
      skills: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "Transformers", "OpenAI", "Anthropic"],
      icon: "🤖",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "Docker", "Anaconda", "Jupyter", "VS Code", "Linux"],
      icon: "🛠️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Specialized Libraries",
      skills: ["Gymnasium", "PettingZoo", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
      icon: "📚",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Research Areas",
      skills: ["Reinforcement Learning", "Generative AI", "Deep Learning", "NLP", "Computer Vision", "Optimization"],
      icon: "🔬",
      color: "from-teal-500 to-cyan-500"
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
            Technical <span className="text-gradient-ocean">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for AI research and software development
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full hover:bg-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency levels indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 glass rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Proficiency Levels</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Expert</h4>
                <p className="text-gray-400 text-sm">Python, PyTorch, Deep Learning, Research</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Advanced</h4>
                <p className="text-gray-400 text-sm">C++, TensorFlow, NLP, Computer Vision</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Proficient</h4>
                <p className="text-gray-400 text-sm">Java, Web Development, Cloud Platforms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;