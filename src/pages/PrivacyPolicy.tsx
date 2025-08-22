import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <section className="policy-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="header-content">
            <div className="policy-icon">
              <Shield size={40} />
            </div>
            <h1>Privacy Policy</h1>
            <p>Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-text">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you contact us through our website, 
              request a consultation, or use our services. This may include your name, email address, phone number, 
              company information, and details about your project requirements.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and promotional offers</li>
              <li>Monitor and analyze trends and usage patterns</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With service providers who assist us in operating our website and conducting our business</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Request data portability</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and 
              analyze website traffic. You can control cookies through your browser settings.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: privacy@apexnovaai.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .policy-header {
          padding: 8rem 0 4rem;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          text-decoration: none;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #00D4FF;
        }

        .header-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .policy-icon {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .policy-content {
          padding: 4rem 0;
        }

        .policy-text {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .policy-text h2 {
          color: #00D4FF;
          margin: 3rem 0 1.5rem;
          font-size: 1.5rem;
        }

        .policy-text h2:first-of-type {
          margin-top: 0;
        }

        .policy-text p {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .policy-text ul {
          color: #cbd5e1;
          margin-bottom: 2rem;
          padding-left: 2rem;
        }

        .policy-text li {
          margin-bottom: 0.75rem;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          margin-top: 2rem;
        }

        .contact-info p {
          margin: 0.5rem 0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .policy-header {
            padding: 6rem 0 3rem;
          }
          
          .policy-text {
            padding: 0 1rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default PrivacyPolicy;