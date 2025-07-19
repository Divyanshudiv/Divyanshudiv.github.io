import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "IEEE Publication",
      description: "Published research paper in IEEE Transactions on Intelligent Transportation Systems (Q1 Journal)",
      icon: "📚",
      color: "from-blue-500 to-indigo-500",
      metric: "Impact Factor: 9.95"
    },
    {
      title: "Research Innovation",
      description: "Developed DeliverAI achieving 15% fleet reduction and 50% utilization increase",
      icon: "🚀", 
      color: "from-green-500 to-teal-500",
      metric: "15% Efficiency Gain"
    },
    {
      title: "International Collaboration",
      description: "Research internship at Purdue University under Dr. Vaneet Aggarwal",
      icon: "🌍",
      color: "from-purple-500 to-pink-500", 
      metric: "Global Research"
    },
    {
      title: "Conference Participation",
      description: "Represented APPCAIR at IndoML 2024 as undergraduate volunteer",
      icon: "🎤",
      color: "from-orange-500 to-red-500",
      metric: "Conference Speaker"
    },
    {
      title: "Teaching Excellence",
      description: "Served as Teaching Assistant for Deep Learning course at BITS Pilani",
      icon: "👨‍🏫",
      color: "from-teal-500 to-cyan-500",
      metric: "Academic Mentor"
    },
    {
      title: "Multi-domain Research", 
      description: "Active research across AI, ML, NLP, Computer Vision, and Traffic Systems",
      icon: "🔬",
      color: "from-pink-500 to-purple-500",
      metric: "5+ Research Areas"
    }
  ];

  const stats = [
    { label: "Research Papers", value: "1+", description: "Published & Under Review" },
    { label: "Projects Completed", value: "6+", description: "AI/ML Research Projects" },
    { label: "Collaborations", value: "3+", description: "International & Domestic" },
    { label: "Years Experience", value: "2+", description: "Research & Development" }
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
            Achievements & <span className="text-gradient-ocean">Recognition</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones and accomplishments in research, academia, and professional development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 rounded-xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                      <span className="text-xl">{achievement.icon}</span>
                    </div>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                      {achievement.metric}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              By the <span className="text-gradient-ocean">Numbers</span>
            </h3>
            <p className="text-gray-400">Quantifying my academic and research journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-primary-400 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <h4 className="text-white font-semibold mb-1">{stat.label}</h4>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Looking Forward</h3>
            <p className="text-gray-300 mb-6">
              Always seeking new challenges and opportunities to contribute to cutting-edge research in AI and machine learning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full hover:from-primary-600 hover:to-accent-600 transition-all"
              >
                View Publications
              </motion.a>
              <motion.a
                href="mailto:f20221129@goa.bits-pilani.ac.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
              >
                Collaborate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;