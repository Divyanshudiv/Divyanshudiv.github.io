import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/experience', label: 'Experience' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Divyanshu Singh
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            color: 'white',
            padding: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navigation;