import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'Computer Vision', 'NLP', 'Systems'];

  const projects = [
    {
      title: "Graph Diffusion for RNA 3D Folding",
      period: "March 2025 - Present",
      institution: "BITS Pilani, Goa",
      category: "AI/ML",
      technologies: ["Graph Neural Networks", "Diffusion Models", "Computational Biology"],
      description: [
        "Developing a graph diffusion model to predict 3D structures of RNA molecules by leveraging graph neural networks and probabilistic sampling techniques.",
        "Exploring the integration of structural constraints and energy-based priors to enhance the accuracy of RNA folding predictions.",
        "Evaluating the model's performance on benchmark datasets, focusing on metrics like RMSD and structural fidelity to native conformations."
      ],
      status: "ongoing",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Driver Behaviour Modeling",
      period: "December 2024 - Present",
      institution: "BITS Pilani, Goa",
      category: "Computer Vision",
      technologies: ["Generative AI", "Computer Vision", "Transformer Models"],
      description: [
        "Developing a transformer-based encoder-decoder model integrating kinematic data, vectorized maps, and vision-language outputs for real-time anomaly detection in traffic behavior.",
        "Designing a driver unruliness quantification framework, capturing risky maneuvers, violations, and aggressive driving patterns."
      ],
      status: "ongoing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Altruistic Ride Sharing",
      period: "August 2024 - Present",
      institution: "BITS Pilani, Goa",
      category: "AI/ML",
      technologies: ["Deep Reinforcement Learning", "Multi-Agent Systems", "Optimization"],
      description: [
        "Developed an altruistic ride-sharing framework where drivers can pick up and drop off riders along their route while minimizing detours.",
        "Utilizing an Attention-based Multi-Agent Actor-Critic model with novel policy modifications to enhance cooperative decision-making, optimizing ride allocation while balancing altruism and efficiency in ride-sharing."
      ],
      status: "ongoing",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "LLMExam: AI-Driven Question Paper Generation",
      period: "April 2025",
      institution: "BITS Pilani, Goa",
      category: "NLP",
      technologies: ["LLM", "RAG", "Multimodal AI", "RLHF"],
      description: [
        "Built a multimodal pipeline using a local LLM (Qwen 2.5) for automated retrieval of textual questions, diagrams, and graphs from PDFs, leveraging vector search for topic-based extraction.",
        "Implemented LLM-driven topic tagging with dynamic matching against a vector database for accurate question categorization.",
        "Generated curated question papers in Markdown format based on user-defined topics and constraints, preserving textual and visual content.",
        "Developing a Reinforcement Learning with Human Feedback (RLHF) framework to evaluate and improve topic tagging accuracy, difficulty assignment, and overall pipeline stability."
      ],
      status: "completed",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DeliverAI",
      period: "December 2023 - June 2024",
      institution: "BITS Pilani, Goa",
      category: "AI/ML",
      technologies: ["Reinforcement Learning", "Optimization", "Traffic Systems"],
      description: [
        "Proposed DeliverAI, a reinforcement learning-based path-sharing algorithm to optimize food delivery routes by reducing costs and improving efficiency.",
        "Modeled the problem as a multi-objective optimization balancing consumer satisfaction and delivery costs.",
        "Simulated DeliverAI on real-world Chicago delivery data, demonstrating a 15% reduction in fleet size, 16% reduction in distance traveled, and 50% increase in fleet utilization compared to traditional point-to-point delivery methods.",
        "Published in IEEE Transactions on Intelligent Transportation Systems."
      ],
      status: "published",
      color: "from-indigo-500 to-purple-500",
      link: "https://ieeexplore.ieee.org/document/10432527"
    },
    {
      title: "Zero-Shot Classification with RoBERTa",
      period: "November 2024",
      institution: "BITS Pilani, Goa",
      category: "NLP",
      technologies: ["NLP", "Deep Learning", "Generative AI", "Zero-Shot Learning"],
      description: [
        "Utilized a pre-trained RoBERTa model for zero-shot classification on the AG News dataset using Hugging Face transformers.",
        "Optimized label prompts iteratively with generative LLMs (Gemma2-9B, Qwen2.5-32B, Nemotron-70B), boosting accuracy from 48.5% to 82.13% (achieved by Nemotron-70B).",
        "Assessed performance using precision, recall, F1-score, and confusion matrices, analyzing common error patterns and label effectiveness."
      ],
      status: "completed",
      color: "from-yellow-500 to-orange-500",
      link: "https://github.com/Divyanshudiv"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            Research <span className="text-gradient-ocean">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative research projects spanning AI, machine learning, and computational systems
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all h-full"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{project.institution}</p>
                      <p className="text-gray-500 text-sm">{project.period}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0 mt-2`} />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      project.status === 'ongoing' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.status.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-gray-300 text-sm leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link if available */}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm hover:opacity-90 transition-all`}
                  >
                    View Project
                  </motion.a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;