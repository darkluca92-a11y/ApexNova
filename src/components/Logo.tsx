import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img 
        src="/logo.png" 
        alt="ApexNova AI Logo" 
        className="logo-img"
        width="120"
        height="50"
      />

      <style jsx>{`
        .logo {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-img {
          height: 50px;
          width: auto;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.3));
        }

        .logo:hover .logo-img {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.5));
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;