import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="text-gradient-ocean">Divyanshu</span><br />
              <span>Singh</span>
            </h1>
            <p className="hero-subtitle">
              Engineer • Researcher • AI Enthusiast
            </p>
            <div className="hero-buttons">
              <a href="mailto:f20221129@goa.bits-pilani.ac.in" className="btn btn-primary">
                Get in Touch
              </a>
              <a 
                href="https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            About <span className="text-gradient-ocean">Me</span>
          </h2>
          <div className="grid grid-2" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Hi!</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                I'm a curious mind navigating the vast universe of computer science. From crafting intelligent algorithms to unraveling the mysteries of machine learning, I'm on a journey to push the boundaries of what's possible in tech.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: '#3b82f6', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Education & Research</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                I'm currently pursuing a Bachelor of Computer Science at Birla Institute of Technology and Science, Pilani, where I also work as an undergraduate researcher at APPCAIR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            News & <span className="text-gradient-ocean">Highlights</span>
          </h2>
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem' }}>🧑🏻‍💻</div>
                <div>
                  <div style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>WORK</div>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                    Research Internship at CLAN Labs, Purdue University
                  </h3>
                  <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                    I'll be interning at CLAN Labs, Purdue University for summer of 2025 where I'll be developing dynamic obstacle avoidance techniques using uncertainty-based adaptive planning with diffusion models under the supervision of Dr. Vaneet Aggarwal.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }} className="grid grid-2">
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>📖</span>
                  <div>
                    <div style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>PUBLISHED</div>
                    <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>IEEE Transactions Publication</h4>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                      Published research paper in IEEE Transactions on Intelligent Transportation Systems (Q1, I.F: 9.95).
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🎓</span>
                  <div>
                    <div style={{ color: '#8b5cf6', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>COMPLETED</div>
                    <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>Digital India Bhashini</h4>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                      Completed research internship contributing to the National Language Translation Mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Let's <span className="text-gradient-ocean">Connect</span>
          </h2>
          <div className="grid grid-2" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            {[
              { label: 'Email', href: 'mailto:f20221129@goa.bits-pilani.ac.in', icon: '✉️' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/divyanshu-singh-130951250', icon: '💼' },
              { label: 'GitHub', href: 'https://www.github.com/Divyanshudiv', icon: '💻' },
              { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en', icon: '🎓' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card"
                style={{ textDecoration: 'none', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{link.icon}</div>
                  <h3 style={{ color: 'white', fontWeight: '600', fontSize: '1.125rem' }}>{link.label}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;