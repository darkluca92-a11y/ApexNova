import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle, Clock, Users, Mic, Calendar, BarChart, Zap, Shield } from 'lucide-react';

const AIPhoneAgents: React.FC = () => {
  const features = [
    {
      icon: <Mic size={24} />,
      title: 'Human-Like Voice',
      description: 'Advanced text-to-speech technology that sounds natural and professional.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Smart Scheduling',
      description: 'Automatically book appointments and manage calendar availability in real-time.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Call Analytics',
      description: 'Detailed insights on call performance, customer satisfaction, and conversion rates.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-Language',
      description: 'Support customers in multiple languages with native-sounding pronunciation.'
    }
  ];

  const benefits = [
    'Available 24/7 without breaks or holidays',
    'Handle unlimited simultaneous calls',
    'Reduce staffing costs by up to 70%',
    'Eliminate hold times and busy signals',
    'Consistent professional service every time',
    'Integrate with existing CRM systems',
    'Capture and qualify leads automatically',
    'Scale during peak times without hiring'
  ];

  const process = [
    {
      step: '01',
      title: 'Voice & Script Design',
      description: 'Design the perfect voice persona and conversation flows that match your brand and business needs.'
    },
    {
      step: '02',
      title: 'AI Training',
      description: 'Train the AI with your specific business knowledge, procedures, and customer service protocols.'
    },
    {
      step: '03',
      title: 'System Integration',
      description: 'Connect with your phone system, CRM, calendar, and other business tools for seamless operation.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing with real scenarios before launching to ensure perfect customer experiences.'
    }
  ];

  const useCases = [
    {
      title: 'Appointment Scheduling',
      description: 'Book appointments, send reminders, and handle cancellations or rescheduling requests.',
      icon: <Calendar size={32} />
    },
    {
      title: 'Customer Support',
      description: 'Handle FAQs, order status inquiries, and basic troubleshooting with instant responses.',
      icon: <Phone size={32} />
    },
    {
      title: 'Lead Qualification',
      description: 'Screen potential customers, collect information, and route qualified leads to sales teams.',
      icon: <Users size={32} />
    },
    {
      title: 'Order Processing',
      description: 'Take orders, process payments, and provide order confirmations over the phone.',
      icon: <BarChart size={32} />
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
            <span className="breadcrumb-current">AI Phone Agents</span>
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
              <Phone size={60} />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AI Phone Agent Services
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Revolutionary AI phone agents that sound completely human and never sleep. Handle appointments, 
              customer inquiries, and lead qualification with intelligent phone automation that works 24/7.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary">
                Deploy Your AI Agent <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                Hear Demo Calls
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Advanced AI Phone Technology</h2>
            <p className="section-description">
              Our AI phone agents use the latest voice technology to provide natural, professional conversations.
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

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>AI Phone Agent Applications</h2>
            <p className="section-description">
              Discover how AI phone agents can handle various business communication needs automatically.
            </p>
          </div>
          <div className="grid grid-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card use-case-card"
              >
                <div className="use-case-icon">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
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
              <h2>Transform Phone Communications with AI</h2>
              <p>
                AI phone agents are revolutionizing business communications by providing consistent, professional service 
                around the clock. Our advanced voice AI technology creates natural-sounding conversations that customers 
                can't distinguish from human agents, while providing superior consistency and availability.
              </p>
              <p>
                Whether you need to handle high call volumes, provide after-hours service, or reduce staffing costs, 
                our AI phone agents seamlessly integrate with your existing phone systems and business processes. 
                They can handle complex conversations, make intelligent decisions, and escalate to human agents when needed.
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
                <Clock size={32} />
                <h3>24/7</h3>
                <p>Always available</p>
              </div>
              <div className="benefit-stat">
                <Zap size={32} />
                <h3>70%</h3>
                <p>Cost reduction</p>
              </div>
              <div className="benefit-stat">
                <Shield size={32} />
                <h3>99.9%</h3>
                <p>Uptime guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>AI Phone Agent Implementation</h2>
            <p className="section-description">
              Our proven process ensures your AI phone agent is perfectly tuned to your business needs.
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


      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for AI-Powered Phone Service?</h2>
            <p>
              Transform your phone communications with intelligent AI agents that never miss a call. 
              Get started with a free consultation and custom demo.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Deploy Your AI Agent <ArrowRight size={20} />
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

        .use-cases-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .use-case-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .use-case-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
        }

        .use-case-icon {
          color: #8A2BE2;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
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

export default AIPhoneAgents;