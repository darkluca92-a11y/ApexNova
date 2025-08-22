import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Logo />
              <span className="company-name">ApexNova AI</span>
            </div>
            <p className="footer-description">
              Igniting Business Innovation with AI Excellence. We transform businesses 
              through cutting-edge artificial intelligence solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">AI Chatbots</Link></li>
              <li><Link to="/services">Phone Agents</Link></li>
              <li><Link to="/services">CRM Integration</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@apexnovaai.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>San Diego, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="copyright">
            © 2025 ApexNova AI. All rights reserved. Built with innovation and excellence.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1d29 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          padding: 4rem 0 2rem;
        }

        .footer-section h4 {
          color: #00D4FF;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .company-name {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00D4FF, #8A2BE2);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-logo-image {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 8px;
        }

        .footer-description {
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #00D4FF;
          color: #00D4FF;
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #00D4FF;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
        }

        .contact-item svg {
          color: #00D4FF;
          flex-shrink: 0;
        }

        .footer-bottom {
          padding: 2rem 0;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #00D4FF, transparent);
          margin-bottom: 2rem;
          opacity: 0.3;
        }

        .copyright {
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .footer-logo {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;