import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <h1 className="hero-title text-center">
            My <span className="text-gradient-ocean">Experience</span>
          </h1>
          <p style={{ textAlign: 'center', color: '#d1d5db', fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto 4rem' }}>
            A journey through academic achievements, professional experiences, and research contributions in AI and computer science.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            {[
              {
                position: "Research Intern",
                company: "CLAN Labs, Purdue University",
                location: "West Lafayette, IN",
                period: "May 2025 - Present",
                type: "CURRENT",
                description: [
                  "Working on dynamic obstacle avoidance techniques using uncertainty-based adaptive planning with diffusion models.",
                  "Exploring multi-modal applications of diffusion models in medical domains.",
                  "Working under the supervision of Dr. Vaneet Aggarwal."
                ]
              },
              {
                position: "Undergraduate Researcher", 
                company: "APP Center for AI Research (APPCAIR)",
                location: "Goa, India",
                period: "December 2023 - Present",
                type: "CURRENT",
                description: [
                  "Developed DeliverAI, a reinforcement learning-based model optimizing food delivery routes.",
                  "Investigating dynamic ride-sharing system using multi-agent actor-critic approach.",
                  "Formulating driver behavior modeling framework for traffic scenarios.",
                  "Working under Dr. Snehanshu Saha and Dr. Santonu Sarkar."
                ]
              },
              {
                position: "Research Intern",
                company: "Digital India Bhashini Division", 
                location: "India",
                period: "May 2024 - July 2024",
                type: "COMPLETED",
                description: [
                  "Contributed to the National Language Mission for Indian languages.",
                  "Collaborated on Inverse Text Normalization (ITN) post-processing.",
                  "Designed WFST-based model for ITN across diverse Indic languages.",
                  "Implemented T5-based model for enhanced punctuation handling."
                ]
              },
              {
                position: "Teaching Assistant",
                company: "CS-F425 Deep Learning, BITS Pilani",
                location: "Goa, India", 
                period: "January 2025 - May 2025",
                type: "COMPLETED",
                description: [
                  "Designed and conducted tutorials on deep learning concepts.",
                  "Assisted in course material development and student assessment."
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                      {exp.position}
                    </h3>
                    <h4 style={{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {exp.company}
                    </h4>
                    <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>{exp.location}</p>
                    <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>{exp.period}</p>
                  </div>
                  <span style={{ 
                    background: exp.type === 'CURRENT' ? '#059669' : '#3b82f6', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.75rem',
                    flexShrink: 0 
                  }}>
                    {exp.type}
                  </span>
                </div>
                <ul style={{ color: '#d1d5db', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'start', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', flexShrink: 0 }}>🎓</div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <h4 style={{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Birla Institute of Technology and Science, Pilani
                  </h4>
                  <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Goa, India</p>
                  <p style={{ color: '#10b981', fontWeight: '600' }}>2022 - 2026</p>
                </div>
              </div>
              
              <div>
                <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Relevant Coursework:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[
                    "Reinforcement Learning", "Generative AI", "Natural Language Processing",
                    "Data Structures and Algorithms", "Database Systems", "Deep Learning",
                    "Object-Oriented Programming", "Theory of Computation", "Logic in CS"
                  ].map((course, index) => (
                    <span key={index} style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#d1d5db',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem'
                    }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Online Courses */}
            <div className="card" style={{ marginTop: '2rem' }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                Continuous Learning
              </h3>
              <div className="grid grid-2">
                {[
                  "DeepMind x UCL: Deep Learning Lectures",
                  "DeepMind x UCL: Reinforcement Learning Lectures", 
                  "CS229 Stanford ML",
                  "CS50's Introduction to AI with Python"
                ].map((course, index) => (
                  <div key={index} style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                    <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Achievements & <span className="text-gradient-ocean">Recognition</span>
          </h2>
          <div className="grid grid-3" style={{ maxWidth: '80rem', margin: '0 auto' }}>
            {[
              {
                title: "IEEE Publication",
                metric: "Impact Factor: 9.95",
                icon: "📚",
                description: "Published in Q1 journal IEEE Transactions on Intelligent Transportation Systems"
              },
              {
                title: "Research Innovation", 
                metric: "15% Efficiency Gain",
                icon: "🚀",
                description: "DeliverAI achieved 15% fleet reduction and 50% utilization increase"
              },
              {
                title: "International Collaboration",
                metric: "Global Research",
                icon: "🌍", 
                description: "Research internship at Purdue University under Dr. Vaneet Aggarwal"
              },
              {
                title: "Conference Participation",
                metric: "Conference Speaker",
                icon: "🎤",
                description: "Represented APPCAIR at IndoML 2024 as undergraduate volunteer"
              },
              {
                title: "Teaching Excellence",
                metric: "Academic Mentor", 
                icon: "👨‍🏫",
                description: "Teaching Assistant for Deep Learning course at BITS Pilani"
              },
              {
                title: "Multi-domain Research",
                metric: "5+ Research Areas",
                icon: "🔬",
                description: "Active research across AI, ML, NLP, Computer Vision, and Traffic Systems"
              }
            ].map((achievement, index) => (
              <div key={index} className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{achievement.icon}</div>
                  <div style={{ 
                    background: '#3b82f6', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.75rem',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}>
                    {achievement.metric}
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>
                    {achievement.title}
                  </h3>
                </div>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.5', textAlign: 'center' }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;