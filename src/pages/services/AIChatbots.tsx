import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle, MessageSquare, Clock, Zap, Users, TrendingUp, Smartphone, Shield } from 'lucide-react';

const AIChatbots: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Natural Conversations',
      description: 'Advanced NLP technology that understands context and provides human-like responses.'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated support.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Responses',
      description: 'Provide immediate answers to customer questions, reducing wait times to zero.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, social media, and messaging platforms seamlessly.'
    }
  ];

  const benefits = [
    'Reduce customer service costs by up to 60%',
    'Handle unlimited simultaneous conversations',
    'Improve customer satisfaction with instant responses',
    'Capture leads 24/7 even when you\'re offline',
    'Integrate with existing CRM and business tools',
    'Scale customer support without hiring more staff',
    'Gather valuable customer insights and data',
    'Support multiple languages for global reach'
  ];

  const process = [
    {
      step: '01',
      title: 'Business Analysis',
      description: 'We analyze your customer service needs, common inquiries, and business processes to design the perfect chatbot.'
    },
    {
      step: '02',
      title: 'Custom Development',
      description: 'Build and train your AI chatbot with industry-specific knowledge and your brand voice.'
    },
    {
      step: '03',
      title: 'Integration & Testing',
      description: 'Seamlessly integrate with your website and systems, followed by comprehensive testing.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploy your chatbot and continuously optimize based on real user interactions and feedback.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Answer FAQs, troubleshoot issues, and escalate complex problems to human agents.',
      icon: <MessageSquare size={32} />
    },
    {
      title: 'Lead Generation',
      description: 'Qualify prospects, collect contact information, and schedule sales appointments.',
      icon: <TrendingUp size={32} />
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, check order status, and process returns.',
      icon: <Smartphone size={32} />
    },
    {
      title: 'Appointment Booking',
      description: 'Schedule appointments, send reminders, and manage calendar availability.',
      icon: <Clock size={32} />
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
            <span className="breadcrumb-current">AI Chatbots</span>
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
              <Bot size={60} />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AI Chatbot Development
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Transform your customer service with intelligent AI chatbots that work 24/7. Our custom chatbots handle inquiries, 
              generate leads, and provide instant support while reducing costs and improving customer satisfaction.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary">
                Build Your Chatbot <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                See Chatbots in Action
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Advanced AI Chatbot Features</h2>
            <p className="section-description">
              Our chatbots use cutting-edge AI technology to provide human-like customer interactions.
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
            <h2>Chatbot Use Cases</h2>
            <p className="section-description">
              Discover how AI chatbots can transform different aspects of your business operations.
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
              <h2>Transform Customer Service with AI Chatbots</h2>
              <p>
                AI chatbots are revolutionizing customer service by providing instant, intelligent responses to customer inquiries. 
                Our custom chatbots learn from every interaction, becoming more helpful and accurate over time while maintaining 
                your brand voice and personality.
              </p>
              <p>
                Whether you need to handle customer support, generate leads, or provide product information, our AI chatbots 
                can be customized to meet your specific business needs. They integrate seamlessly with your existing systems 
                and can handle multiple conversations simultaneously without any drop in quality.
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
                <Users size={32} />
                <h3>60%</h3>
                <p>Cost reduction in support</p>
              </div>
              <div className="benefit-stat">
                <Clock size={32} />
                <h3>24/7</h3>
                <p>Always available</p>
              </div>
              <div className="benefit-stat">
                <Zap size={32} />
                <h3>&lt;1s</h3>
                <p>Average response time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Chatbot Development Process</h2>
            <p className="section-description">
              From concept to deployment, we ensure your chatbot perfectly aligns with your business needs.
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
            <h2>Ready to Launch Your AI Chatbot?</h2>
            <p>
              Transform your customer service and reduce costs with a custom AI chatbot. 
              Get started with a free consultation and chatbot strategy session.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Chatbot Project <ArrowRight size={20} />
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

export default AIChatbots;