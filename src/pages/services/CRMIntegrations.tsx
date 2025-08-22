import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, ArrowRight, CheckCircle, Link2, Workflow, BarChart, Zap, Users, Settings, Shield } from 'lucide-react';

const CRMIntegrations: React.FC = () => {
  const features = [
    {
      icon: <Link2 size={24} />,
      title: 'Seamless Connections',
      description: 'Connect all your business tools and platforms with robust API integrations.'
    },
    {
      icon: <Workflow size={24} />,
      title: 'Automated Workflows',
      description: 'Automate repetitive tasks and create efficient workflows across all systems.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Unified Analytics',
      description: 'Get complete visibility with consolidated reporting from all your business tools.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Custom Solutions',
      description: 'Tailored integrations that fit your specific business processes and requirements.'
    }
  ];

  const benefits = [
    'Eliminate data silos between systems',
    'Reduce manual data entry by 90%',
    'Improve data accuracy and consistency',
    'Streamline customer journey tracking',
    'Automate lead nurturing processes',
    'Generate unified business reports',
    'Sync customer data across platforms',
    'Reduce operational overhead costs'
  ];

  const process = [
    {
      step: '01',
      title: 'System Assessment',
      description: 'Analyze your current tech stack and identify integration opportunities and requirements.'
    },
    {
      step: '02',
      title: 'Integration Planning',
      description: 'Design the integration architecture and workflow automation strategy for your business.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build secure, reliable integrations with thorough testing to ensure data integrity.'
    },
    {
      step: '04',
      title: 'Deployment & Training',
      description: 'Deploy integrations and train your team on the new automated workflows.'
    }
  ];

  const integrations = [
    {
      category: 'CRM Systems',
      tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Monday.com'],
      icon: <Users size={32} />
    },
    {
      category: 'Marketing Tools',
      tools: ['Mailchimp', 'Constant Contact', 'ActiveCampaign', 'Marketo'],
      icon: <BarChart size={32} />
    },
    {
      category: 'E-commerce',
      tools: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'],
      icon: <Database size={32} />
    },
    {
      category: 'Communication',
      tools: ['Slack', 'Microsoft Teams', 'Discord', 'Twilio'],
      icon: <Link2 size={32} />
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic Integration',
      price: '$1,999',
      description: 'Simple integrations for small businesses',
      features: [
        'Up to 3 system connections',
        'Basic data synchronization',
        'Standard API integrations',
        'Email support',
        '30-day warranty',
        'Documentation included'
      ]
    },
    {
      name: 'Professional Suite',
      price: '$4,999',
      description: 'Comprehensive integrations for growing companies',
      features: [
        'Up to 8 system connections',
        'Advanced workflow automation',
        'Custom API development',
        'Real-time data sync',
        'Priority support',
        '90-day warranty',
        'Training sessions included'
      ],
      featured: true
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom',
      description: 'Complex integrations for large organizations',
      features: [
        'Unlimited integrations',
        'Custom middleware development',
        'Advanced security features',
        'Dedicated project manager',
        '24/7 support',
        '1-year warranty',
        'Ongoing optimization'
      ]
    }
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
            <Link to="/services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">CRM Integrations</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-icon"
            >
              <Database size={60} />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              CRM Integration Services
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Connect all your business tools and eliminate data silos with seamless CRM integrations. 
              Automate workflows, synchronize data, and create a unified view of your business operations.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary">
                Connect Your Systems <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Integration Examples
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Integration Capabilities</h2>
            <p className="section-description">
              Advanced integration solutions that connect your entire business ecosystem seamlessly.
            </p>
          </div>
          <div className="grid grid-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Popular Integration Platforms</h2>
            <p className="section-description">
              We integrate with all major CRM, marketing, e-commerce, and communication platforms.
            </p>
          </div>
          <div className="grid grid-2">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card integration-card"
              >
                <div className="integration-icon">{integration.icon}</div>
                <h3>{integration.category}</h3>
                <div className="integration-tools">
                  {integration.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Streamline Operations with Smart Integrations</h2>
              <p>
                CRM integrations are essential for modern businesses looking to streamline operations and improve efficiency. 
                Our integration solutions eliminate manual data entry, reduce errors, and create seamless workflows 
                that connect all aspects of your business operations.
              </p>
              <p>
                We specialize in creating custom integrations that not only connect your systems but also automate 
                complex business processes. From lead capture to customer support, our integrations ensure that 
                information flows smoothly between all your business tools, giving you a complete view of your operations.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle size={20} />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="benefits-visual">
              <div className="benefit-stat">
                <Workflow size={32} />
                <h3>90%</h3>
                <p>Less manual data entry</p>
              </div>
              <div className="benefit-stat">
                <Zap size={32} />
                <h3>180%</h3>
                <p>Process efficiency gain</p>
              </div>
              <div className="benefit-stat">
                <Shield size={32} />
                <h3>99.5%</h3>
                <p>Data accuracy improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Integration Development Process</h2>
            <p className="section-description">
              Our systematic approach ensures seamless integrations that work reliably from day one.
            </p>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="process-step"
              >
                <div className="process-number">{step.step}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Integration Service Packages</h2>
            <p className="section-description">
              Choose the integration package that matches your business complexity and budget.
            </p>
          </div>
          <div className="grid grid-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className={`card pricing-card ${tier.featured ? 'featured' : ''}`}
              >
                {tier.featured && <div className="featured-badge">Most Popular</div>}
                <h3>{tier.name}</h3>
                <div className="pricing-price">{tier.price}</div>
                <p className="pricing-description">{tier.description}</p>
                <ul className="pricing-features">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary pricing-btn">
                  Choose {tier.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Connect Your Business Systems?</h2>
            <p>
              Stop wasting time on manual data entry and disconnected systems. Let's create seamless 
              integrations that streamline your operations and boost productivity.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Integration Project <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View All Services
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

        .service-hero {
          padding: 6rem 0 4rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-icon {
          color: #00D4FF;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .hero-description {
          font-size: 1.3rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-description {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .feature-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .integrations-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .integration-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .integration-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
        }

        .integration-icon {
          color: #8A2BE2;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .integration-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .tool-tag {
          background: rgba(0, 255, 127, 0.1);
          color: #00FF7F;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 255, 127, 0.3);
        }

        .benefits-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .benefits-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .benefits-text h2 {
          margin-bottom: 2rem;
        }

        .benefits-text p {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .benefits-list {
          list-style: none;
          margin-top: 2rem;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #cbd5e1;
          font-size: 1.1rem;
        }

        .benefits-list svg {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .benefits-visual {
          display: grid;
          gap: 2rem;
        }

        .benefit-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit-stat:hover {
          background: rgba(0, 212, 255, 0.05);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.1);
        }

        .benefit-stat svg {
          color: #00D4FF;
          margin-bottom: 1rem;
        }

        .benefit-stat h3 {
          font-size: 2rem;
          color: #00FF7F;
          margin-bottom: 0.5rem;
        }

        .benefit-stat p {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .process-grid {
          display: grid;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          gap: 2rem;
          align-items: start;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .process-number {
          font-size: 2rem;
          font-weight: 700;
          color: #00D4FF;
          flex-shrink: 0;
          width: 60px;
          text-align: center;
        }

        .process-content h3 {
          color: #8A2BE2;
          margin-bottom: 1rem;
        }

        .process-content p {
          color: #94a3b8;
          margin: 0;
          line-height: 1.6;
        }

        .pricing-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.02), rgba(138, 43, 226, 0.02));
        }

        .pricing-card {
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .pricing-card.featured {
          border-color: #00D4FF;
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #00D4FF, #8A2BE2);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .pricing-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #00D4FF;
          margin: 1rem 0;
        }

        .pricing-description {
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .pricing-features {
          list-style: none;
          text-align: left;
          margin-bottom: 2rem;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #cbd5e1;
        }

        .pricing-features svg {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .pricing-btn {
          width: 100%;
          justify-content: center;
        }

        .service-cta {
          padding: 6rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          margin-bottom: 1.5rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 2.5rem;
        }

        .cta-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .benefits-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .service-hero {
            padding: 4rem 0 3rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .process-number {
            width: auto;
          }

          .pricing-card.featured {
            transform: none;
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

export default CRMIntegrations;