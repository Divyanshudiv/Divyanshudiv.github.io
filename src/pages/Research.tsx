import React from 'react';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <h1 className="hero-title text-center">
            Research & <span className="text-gradient-ocean">Projects</span>
          </h1>
          <p style={{ textAlign: 'center', color: '#d1d5db', fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto 4rem' }}>
            Exploring the frontiers of artificial intelligence, machine learning, and computational research through innovative projects and publications.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Publications</h2>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                The Last Mile: A Novel, HotSpot Based Distributed Path-Sharing Network for Food Deliveries
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#3b82f6', fontWeight: '600' }}>IEEE Transactions on Intelligent Transport Systems</span>
                <span style={{ background: '#10b981', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', marginLeft: '1rem' }}>
                  Q1, I.F: 9.95
                </span>
              </div>
              <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                DOI: 10.1109/TITS.2024.3465217
              </p>
              <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                <strong>Authors:</strong> Ashman Mehra, Divyanshu Singh, Vaskar Raychoudhury, Archana Mathur, Snehanshu Saha
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://ieeexplore.ieee.org/document/10432527" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  IEEE Xplore
                </a>
                <a href="https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Research Projects</h2>
          <div className="grid grid-2" style={{ maxWidth: '80rem', margin: '0 auto' }}>
            {[
              {
                title: "Graph Diffusion for RNA 3D Folding",
                period: "March 2025 - Present",
                status: "ONGOING",
                tech: "Graph Neural Networks, Diffusion Models, Computational Biology",
                description: "Developing a graph diffusion model to predict 3D structures of RNA molecules using probabilistic sampling techniques."
              },
              {
                title: "Driver Behaviour Modeling",
                period: "December 2024 - Present", 
                status: "ONGOING",
                tech: "Generative AI, Computer Vision, Transformer Models",
                description: "Transformer-based encoder-decoder model for real-time anomaly detection in traffic behavior."
              },
              {
                title: "Altruistic Ride Sharing",
                period: "August 2024 - Present",
                status: "ONGOING", 
                tech: "Deep Reinforcement Learning, Multi-Agent Systems",
                description: "Attention-based Multi-Agent Actor-Critic model for optimizing ride allocation with altruistic framework."
              },
              {
                title: "LLMExam: AI-Driven Question Paper Generation",
                period: "April 2025",
                status: "COMPLETED",
                tech: "LLM, RAG, Multimodal AI, RLHF", 
                description: "Multimodal pipeline using local LLM for automated question paper generation from PDFs."
              },
              {
                title: "DeliverAI",
                period: "December 2023 - June 2024",
                status: "PUBLISHED",
                tech: "Reinforcement Learning, Optimization",
                description: "RL-based path-sharing algorithm achieving 15% fleet reduction and 50% utilization increase."
              },
              {
                title: "Zero-Shot Classification with RoBERTa",
                period: "November 2024", 
                status: "COMPLETED",
                tech: "NLP, Zero-Shot Learning, Transformers",
                description: "Boosted accuracy from 48.5% to 82.13% using optimized label prompts with generative LLMs."
              }
            ].map((project, index) => (
              <div key={index} className="card" style={{ height: 'fit-content' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '700', flex: 1 }}>
                    {project.title}
                  </h3>
                  <span style={{ 
                    background: project.status === 'ONGOING' ? '#059669' : project.status === 'PUBLISHED' ? '#7c3aed' : '#3b82f6', 
                    color: 'white', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '0.25rem', 
                    fontSize: '0.75rem',
                    flexShrink: 0,
                    marginLeft: '1rem'
                  }}>
                    {project.status}
                  </span>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>{project.period}</p>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Technologies:</p>
                  <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{project.tech}</p>
                </div>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.5' }}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-3" style={{ maxWidth: '80rem', margin: '0 auto' }}>
            {[
              {
                title: "Programming Languages",
                skills: "Python, C++, C, Java, SQL, LaTeX, JavaScript",
                icon: "💻"
              },
              {
                title: "AI/ML Frameworks", 
                skills: "PyTorch, TensorFlow, JAX, Hugging Face, Transformers",
                icon: "🤖"
              },
              {
                title: "Development Tools",
                skills: "Git, GitHub, Docker, Anaconda, Jupyter, VS Code",
                icon: "🛠️"
              }
            ].map((category, index) => (
              <div key={index} className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>
                    {category.title}
                  </h3>
                </div>
                <p style={{ color: '#d1d5db', textAlign: 'center', lineHeight: '1.5' }}>{category.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;