import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <section className="terms-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="header-content">
            <div className="terms-icon">
              <FileText size={40} />
            </div>
            <h1>Terms of Service</h1>
            <p>Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-text">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using ApexNova AI's services, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>Services Description</h2>
            <p>
              ApexNova AI provides artificial intelligence solutions including but not limited to website development, 
              SEO optimization, AI chatbots, phone agents, CRM integrations, and custom AI automation services.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use ApexNova AI's services for personal or commercial viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose without written consent</li>
              <li>Attempt to reverse engineer any software contained on our platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment for services is due according to the terms specified in your service agreement. Late payments 
              may result in service suspension. All fees are non-refundable unless otherwise specified in writing.
            </p>

            <h2>Service Availability</h2>
            <p>
              We strive to maintain high service availability but cannot guarantee 100% uptime. We reserve the right 
              to modify or discontinue services with reasonable notice.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All custom work created for clients becomes the property of the client upon full payment. ApexNova AI 
              retains the right to showcase completed projects in our portfolio unless otherwise agreed upon.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall ApexNova AI or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use our services.
            </p>

            <h2>Privacy</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
              information when you use our services.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: legal@apexnovaai.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .terms-header {
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

        .terms-icon {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .terms-content {
          padding: 4rem 0;
        }

        .terms-text {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .terms-text h2 {
          color: #00D4FF;
          margin: 3rem 0 1.5rem;
          font-size: 1.5rem;
        }

        .terms-text h2:first-of-type {
          margin-top: 0;
        }

        .terms-text p {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .terms-text ul {
          color: #cbd5e1;
          margin-bottom: 2rem;
          padding-left: 2rem;
        }

        .terms-text li {
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
          .terms-header {
            padding: 6rem 0 3rem;
          }
          
          .terms-text {
            padding: 0 1rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TermsOfService;