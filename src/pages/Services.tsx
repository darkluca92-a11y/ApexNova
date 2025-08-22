import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Search, Bot, Phone, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'website-development',
      icon: <Globe size={40} />,
      title: 'Website Development',
      description: 'Custom AI-powered websites that convert visitors into customers with intelligent user experiences.',
      features: ['Responsive Design', 'AI Integration', 'Performance Optimized', 'SEO Ready'],
      price: 'Starting at $2,999'
    },
    {
      id: 'seo-optimization',
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies powered by AI to dominate search rankings and drive organic traffic.',
      features: ['Keyword Research', 'Content Strategy', 'Technical SEO', 'Analytics & Reporting'],
      price: 'Starting at $1,499/month'
    },
    {
      id: 'ai-chatbots',
      icon: <Bot size={40} />,
      title: 'AI Chatbots',
      description: '24/7 intelligent customer service that handles inquiries, bookings, and support automatically.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Learning Capabilities', 'Analytics Dashboard'],
      price: 'Starting at $799/month'
    },
    {
      id: 'ai-phone-agents',
      icon: <Phone size={40} />,
      title: 'AI Phone Agents',
      description: 'Automated phone systems with human-like voices that handle calls, appointments, and customer service.',
      features: ['Voice Recognition', 'Appointment Scheduling', 'Call Analytics', 'CRM Integration'],
      price: 'Starting at $999/month'
    },
    {
      id: 'crm-integrations',
      icon: <Database size={40} />,
      title: 'CRM Integrations',
      description: 'Seamlessly connect all your business tools with intelligent automation and data synchronization.',
      features: ['API Development', 'Data Migration', 'Workflow Automation', 'Custom Integrations'],
      price: 'Starting at $1,999'
    },
    {
      id: 'ai-automation',
      icon: <Zap size={40} />,
      title: 'AI Automation',
      description: 'Custom AI solutions to automate repetitive tasks and streamline your business processes.',
      features: ['Process Analysis', 'Custom AI Models', 'Workflow Design', 'Performance Monitoring'],
      price: 'Custom Pricing'
    }
  ];

  const benefits = [
    'Increase efficiency by up to 300%',
    '24/7 automated customer service',
    'Reduce operational costs significantly',
    'Scale your business without hiring',
    'Data-driven decision making',
    'Competitive advantage through AI'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Header */}
      <section className="services-header">
        <div className="container">
          <div className="header-content">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              AI-Powered Services
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="header-description"
            >
              Transform your business with our comprehensive suite of AI solutions. 
              Each service is designed to maximize efficiency and drive measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card service-card"
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div>
                    <h3>
                      <Link to={service.id === 'ai-automation' ? `/services/ai-automation` : `/services/${service.id}`} className="service-title-link">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <CheckCircle size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <div className="service-actions">
                    <Link to={service.id === 'ai-automation' ? `/services/ai-automation` : `/services/${service.id}`} className="btn btn-secondary service-btn">
                      Learn More
                    </Link>
                    <Link to="/contact" className="btn btn-primary service-btn">
                      Get Started <ArrowRight size={18} />
                    </Link>
                  </div>
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
              <h2>Why Choose Our AI Solutions?</h2>
              <p>
                Our AI-powered services deliver measurable results that transform how you do business. 
                Here's what you can expect when partnering with us:
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
              <div className="benefit-card">
                <h3>300%</h3>
                <p>Average Efficiency Increase</p>
              </div>
              <div className="benefit-card">
                <h3>24/7</h3>
                <p>Automated Operations</p>
              </div>
              <div className="benefit-card">
                <h3>60%</h3>
                <p>Cost Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-header {
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .header-description {
          font-size: 1.3rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 212, 255, 0.15);
        }

        .service-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .service-icon {
          color: #00D4FF;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }

        .service-description {
          color: #94a3b8;
          margin: 0.5rem 0 0;
          font-size: 1rem;
        }

        .service-features {
          flex: 1;
          margin-bottom: 2rem;
        }

        .service-features h4 {
          color: #8A2BE2;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .service-features ul {
          list-style: none;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .service-features svg {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .service-footer {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-price {
          font-size: 1.2rem;
          font-weight: 600;
          color: #00D4FF;
          text-align: center;
        }

        .service-actions {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        .service-btn {
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
          flex: 1;
          justify-content: center;
          text-decoration: none;
          text-align: center;
        }

        .service-title-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .service-title-link:hover {
          color: #00D4FF;
        }

        .benefits-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
          margin: 4rem 0;
        }

        .benefits-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .benefits-text h2 {
          margin-bottom: 1.5rem;
        }

        .benefits-text p {
          color: #94a3b8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .benefits-list {
          list-style: none;
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
          gap: 1.5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          background: rgba(0, 212, 255, 0.05);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.1);
        }

        .benefit-card h3 {
          font-size: 2.5rem;
          color: #00D4FF;
          margin-bottom: 0.5rem;
        }

        .benefit-card p {
          color: #94a3b8;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .benefits-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .services-header {
            padding: 6rem 0 3rem;
          }

          .service-header {
            flex-direction: column;
            gap: 1rem;
          }

          .service-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Services;