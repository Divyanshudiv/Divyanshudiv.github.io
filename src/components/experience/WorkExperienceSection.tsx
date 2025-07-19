import React from 'react';
import { motion } from 'framer-motion';

const WorkExperienceSection: React.FC = () => {
  const experiences = [
    {
      position: "Research Intern",
      company: "CLAN Labs, Purdue University",
      location: "West Lafayette, IN",
      period: "May 2025 - Present",
      type: "Research",
      description: [
        "Working on the development of dynamic obstacle avoidance techniques using uncertainty-based adaptive planning with diffusion models.",
        "Exploring multi-modal applications of diffusion models in medical domains.",
        "Working under the supervision of Dr. Vaneet Aggarwal."
      ],
      technologies: ["Diffusion Models", "Uncertainty Quantification", "Medical AI"],
      color: "from-purple-500 to-indigo-500",
      status: "current"
    },
    {
      position: "Undergraduate Researcher",
      company: "APP Center for AI Research (APPCAIR)",
      location: "Goa, India",
      period: "December 2023 - Present",
      type: "Research",
      description: [
        "Developed DeliverAI, a reinforcement learning-based model optimizing food delivery routes.",
        "Investigating a novel dynamic ride-sharing system using a multi-agent actor-critic approach with enhancements to minimize detours and optimize rider pickups.",
        "Formulating a driver behavior modeling framework to quantify unruliness in traffic scenarios, with plans to adapt it for complex traffic conditions in India.",
        "Working under the supervision of Dr. Snehanshu Saha and Dr. Santonu Sarkar."
      ],
      technologies: ["Reinforcement Learning", "Multi-Agent Systems", "Traffic Optimization"],
      color: "from-blue-500 to-cyan-500",
      status: "current"
    },
    {
      position: "Research Intern",
      company: "Digital India Bhashini Division",
      location: "India",
      period: "May 2024 - July 2024",
      type: "Internship",
      description: [
        "Contributed to the National Language Mission to advance language technologies for Indian languages.",
        "Collaborated with the post-processing team, focusing on Inverse Text Normalization (ITN).",
        "Designed a WFST-based model for ITN across diverse Indic languages.",
        "Implemented a T5-based model to enhance ITN by introducing punctuation handling."
      ],
      technologies: ["NLP", "WFST", "T5", "Indic Languages"],
      color: "from-green-500 to-teal-500",
      status: "completed"
    },
    {
      position: "Teaching Assistant",
      company: "CS-F425 Deep Learning, BITS Pilani",
      location: "Goa, India",
      period: "January 2025 - May 2025",
      type: "Academic",
      description: [
        "Designed and conducted tutorials on deep learning concepts for undergraduate students.",
        "Assisted in course material development and student assessment.",
        "Mentored students in deep learning projects and research methodologies."
      ],
      technologies: ["Deep Learning", "Education", "Mentoring"],
      color: "from-orange-500 to-red-500",
      status: "completed"
    },
    {
      position: "Undergraduate Volunteer",
      company: "IndoML 2024",
      location: "Goa, India",
      period: "December 2024",
      type: "Conference",
      description: [
        "Represented APPCAIR as one of the few undergraduate volunteers.",
        "Showcased research at the sponsor stall and facilitated Q&A sessions during the conference.",
        "Networked with leading researchers and industry professionals in machine learning."
      ],
      technologies: ["Conference Organization", "Research Presentation", "Networking"],
      color: "from-pink-500 to-purple-500",
      status: "completed"
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
            Work <span className="text-gradient-ocean">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey through research, internships, and academic contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-slate-900 z-10`}></div>
                
                {/* Experience card */}
                <div className="ml-20">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                          {exp.status === 'current' && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <h4 className="text-primary-400 font-semibold text-lg mb-1">{exp.company}</h4>
                        <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-gray-300">{exp.period}</span>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            exp.type === 'Research' ? 'bg-purple-500/20 text-purple-400' :
                            exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-400' :
                            exp.type === 'Academic' ? 'bg-green-500/20 text-green-400' :
                            'bg-pink-500/20 text-pink-400'
                          }`}>
                            {exp.type.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <motion.li
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + descIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                          >
                            • {desc}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;