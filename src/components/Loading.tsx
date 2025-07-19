import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }}>
      <div style={{
        width: '4rem',
        height: '4rem',
        border: '4px solid #3b82f6',
        borderTop: '4px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      
      <div style={{
        marginLeft: '1.5rem',
        color: 'white',
        fontSize: '1.25rem',
        fontFamily: 'Space Grotesk, sans-serif'
      }}>
        Loading...
      </div>
    </div>
  );
};

export default Loading;