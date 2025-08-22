import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <svg width="50" height="50" viewBox="0 0 50 50" className="logo-svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#00FF7F" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer orbital ring */}
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1"
          opacity="0.3"
          className="orbit-outer"
        />
        
        {/* Inner orbital ring */}
        <circle
          cx="25"
          cy="25"
          r="15"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1"
          opacity="0.5"
          className="orbit-inner"
        />
        
        {/* Central core */}
        <circle
          cx="25"
          cy="25"
          r="8"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          className="core pulse"
        />
        
        {/* AI nodes */}
        <circle cx="25" cy="7" r="2" fill="#00D4FF" className="node glow" />
        <circle cx="43" cy="25" r="2" fill="#8A2BE2" className="node glow" />
        <circle cx="25" cy="43" r="2" fill="#00FF7F" className="node glow" />
        <circle cx="7" cy="25" r="2" fill="#00D4FF" className="node glow" />
        
        {/* Connection lines */}
        <line x1="25" y1="17" x2="25" y2="33" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.6" />
        <line x1="17" y1="25" x2="33" y2="25" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.6" />
      </svg>

      <style jsx>{`
        .logo {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-svg {
          transition: all 0.3s ease;
        }

        .logo:hover .logo-svg {
          transform: scale(1.1);
        }

        .orbit-outer {
          animation: rotate 20s linear infinite;
          transform-origin: center;
        }

        .orbit-inner {
          animation: rotate 15s linear infinite reverse;
          transform-origin: center;
        }

        .core {
          animation: pulse 2s ease-in-out infinite;
        }

        .node {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Logo;