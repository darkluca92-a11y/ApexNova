import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';

const RetailMaxEcommerce: React.FC = () => {
  const results = [
    { metric: 'Conversion Rate', value: '145% increase', icon: <TrendingUp size={20} /> },
    { metric: 'Organic Traffic', value: '230% growth', icon: <Users size={20} /> },
    { metric: 'Additional Revenue', value: '$2.5M', icon: <DollarSign size={20} /> },
    { metric: 'Page Load Speed', value: '3x faster', icon: <TrendingUp size={20} /> }
  ];

  const challenges = [
    'Low conversion rates despite high traffic volume',
    'Poor SEO performance limiting organic visibility',
    'Outdated website design hurting user experience',
    'Slow page loading times causing high bounce rates'
  ];

  const solutions = [
    'Complete website redesign with AI-powered recommendations',
    'Comprehensive SEO optimization and technical improvements',
    'Implementation of intelligent product recommendation engine',
    'Performance optimization with modern web technologies'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">→</span>
            <Link to="/portfolio" className="breadcrumb-link">Portfolio</Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">RetailMax E-commerce</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container">
          <div className="hero-content">
            <Link to="/portfolio" className="back-link">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            <div className="case-study-header">
              <div className="case-study-icon">🛍️</div>
              <div>
                <h1>RetailMax E-commerce Optimization</h1>
                <div className="case-study-meta">
                  <span className="industry">E-commerce</span>
                  <span className="separator">•</span>
                  <span className="timeline">4 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8">
        <div className="container">
          <div className="case-study-overview">
            <div className="overview-text">
              <h2>Project Overview</h2>
              <p>
                RetailMax, a mid-sized e-commerce retailer, was experiencing stagnant growth due to low conversion 
                rates and poor search engine visibility. Despite having quality products and decent traffic, their 
                outdated website was failing to convert visitors into customers.
              </p>
              <p>
                We completely transformed their online presence with a modern, AI-powered e-commerce platform that 
                not only improved user experience but also dramatically increased conversions and organic traffic.
              </p>
            </div>
            <div className="overview-stats">
              {results.map((result, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{result.icon}</div>
                  <div className="stat-content">
                    <div className="stat-value">{result.value}</div>
                    <div className="stat-label">{result.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="challenge-solution-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="challenge-card">
              <h3>The Challenge</h3>
              <ul className="challenge-list">
                {challenges.map((challenge, index) => (
                  <li key={index}>
                    <ShoppingCart size={16} />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="solution-card">
              <h3>Our Solution</h3>
              <ul className="solution-list">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-study-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your E-commerce Success</h2>
            <p>
              Ready to see similar growth in your online store? Let's discuss how we can optimize 
              your e-commerce platform for maximum conversions and revenue.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/services/website-development" className="btn btn-secondary">
                Learn About Web Development
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .breadcrumb {
          padding: 2rem 0 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .breadcrumb-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .breadcrumb-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb-link:hover {
          color: #00D4FF;
        }

        .breadcrumb-separator {
          color: #64748b;
        }

        .breadcrumb-current {
          color: #00D4FF;
          font-weight: 500;
        }

        .case-study-hero {
          padding: 4rem 0;
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

        .case-study-header {
          display: flex;
          gap: 2rem;
          align-items: start;
        }

        .case-study-icon {
          font-size: 4rem;
          flex-shrink: 0;
        }

        .case-study-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .industry {
          background: rgba(138, 43, 226, 0.2);
          color: #8A2BE2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .separator {
          color: #64748b;
        }

        .timeline {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .case-study-overview {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .overview-text h2 {
          color: #00D4FF;
          margin-bottom: 2rem;
        }

        .overview-text p {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .overview-stats {
          display: grid;
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 15px;
          padding: 1.5rem;
        }

        .stat-icon {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #00D4FF;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .challenge-solution-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .challenge-card, .solution-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }

        .challenge-card h3 {
          color: #FF6B6B;
          margin-bottom: 1.5rem;
        }

        .solution-card h3 {
          color: #00FF7F;
          margin-bottom: 1.5rem;
        }

        .challenge-list, .solution-list {
          list-style: none;
        }

        .challenge-list li, .solution-list li {
          display: flex;
          align-items: start;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #cbd5e1;
        }

        .challenge-list svg {
          color: #FF6B6B;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .solution-list svg {
          color: #00FF7F;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .case-study-cta {
          padding: 6rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          color: #00D4FF;
          margin-bottom: 1.5rem;
        }

        .cta-content p {
          color: #94a3b8;
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
        }

        .cta-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .case-study-overview {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .case-study-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .case-study-meta {
            justify-content: center;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default RetailMaxEcommerce;