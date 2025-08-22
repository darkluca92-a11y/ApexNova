import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle, Workflow, BarChart, Settings, Clock, Users, TrendingUp, Shield } from 'lucide-react';

const AIAutomation: React.FC = () => {
  const features = [
    {
      icon: <Workflow size={24} />,
      title: 'Process Automation',
      description: 'Automate repetitive business processes with intelligent workflows that adapt and learn.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Data Processing',
      description: 'Automatically collect, process, and analyze large datasets with AI-powered insights.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Custom AI Models',
      description: 'Tailored AI solutions built specifically for your industry and business requirements.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Real-time Monitoring',
      description: 'Monitor automated processes in real-time with intelligent alerts and performance tracking.'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 80%',
    'Eliminate human error in repetitive tasks',
    'Process data 24/7 without breaks',
    'Scale operations without hiring more staff',
    'Improve accuracy and consistency',
    'Free up employees for strategic work',
    'Generate actionable business insights',
    'Adapt to changing business requirements'
  ];

  const process = [
    {
      step: '01',
      title: 'Process Analysis',
      description: 'Comprehensive analysis of your current workflows to identify automation opportunities and bottlenecks.'
    },
    {
      step: '02',
      title: 'AI Solution Design',
      description: 'Design custom AI models and automation workflows tailored to your specific business needs.'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build and integrate AI automation solutions with your existing systems and processes.'
    },
    {
      step: '04',
      title: 'Training & Optimization',
      description: 'Train your team and continuously optimize AI performance based on real-world results.'
    }
  ];

  const automationTypes = [
    {
      title: 'Document Processing',
      description: 'Automatically extract, classify, and process documents with OCR and NLP technology.',
      icon: <BarChart size={32} />
    },
    {
      title: 'Email Automation',
      description: 'Intelligent email sorting, response generation, and customer communication automation.',
      icon: <Workflow size={32} />
    },
    {
      title: 'Data Entry & Migration',
      description: 'Automate data entry, validation, and migration between different systems and databases.',
      icon: <Settings size={32} />
    },
    {
      title: 'Report Generation',
      description: 'Automatically generate comprehensive reports and analytics from multiple data sources.',
      icon: <TrendingUp size={32} />
    }
  ];

  const pricingTiers = [
    {
      name: 'Process Starter',
      price: '$2,499',
      description: 'Basic automation for small businesses',
      features: [
        'Up to 3 automated processes',
        'Basic AI model training',
        'Standard integrations',
        'Email support',
        '90-day optimization',
        'Process documentation'
      ]
    },
    {
      name: 'Business Pro',
      price: '$7,999',
      description: 'Comprehensive automation suite',
      features: [
        'Up to 10 automated processes',
        'Advanced AI models',
        'Custom integrations',
        'Real-time monitoring',
        'Priority support',
        '6-month optimization',
        'Team training included'
      ],
      featured: true
    },
    {
      name: 'Enterprise Scale',
      price: 'Custom',
      description: 'Large-scale automation solutions',
      features: [
        'Unlimited processes',
        'Custom AI development',
        'Enterprise integrations',
        'Dedicated support team',
        '24/7 monitoring',
        '12-month optimization',
        'Advanced analytics'
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
            <span className="breadcrumb-current">AI Automation</span>
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
              <Zap size={60} />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AI Automation Solutions
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Transform your business operations with intelligent automation that works 24/7. Our custom AI solutions 
              eliminate repetitive tasks, reduce costs, and free your team to focus on strategic growth initiatives.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary">
                Automate Your Business <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                See Automation Examples
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Intelligent Automation Features</h2>
            <p className="section-description">
              Cutting-edge AI technology that learns, adapts, and optimizes your business processes automatically.
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

      {/* Automation Types Section */}
      <section className="automation-types-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Types of AI Automation</h2>
            <p className="section-description">
              From document processing to data analysis, we automate complex business processes across all industries.
            </p>
          </div>
          <div className="grid grid-2">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card automation-type-card"
              >
                <div className="automation-type-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
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
              <h2>Revolutionize Your Operations with AI Automation</h2>
              <p>
                AI automation is no longer a luxury—it's a necessity for businesses that want to stay competitive. 
                Our intelligent automation solutions don't just replace manual processes; they enhance them with 
                machine learning capabilities that improve performance over time.
              </p>
              <p>
                Whether you're dealing with high-volume data processing, complex decision-making workflows, or 
                repetitive administrative tasks, our AI automation solutions adapt to your specific needs. We create 
                custom models that understand your business context and deliver consistent, accurate results while 
                reducing operational costs and improving employee satisfaction.
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
                <TrendingUp size={32} />
                <h3>80%</h3>
                <p>Cost reduction average</p>
              </div>
              <div className="benefit-stat">
                <Clock size={32} />
                <h3>24/7</h3>
                <p>Continuous operation</p>
              </div>
              <div className="benefit-stat">
                <Shield size={32} />
                <h3>99.9%</h3>
                <p>Accuracy improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our AI Automation Process</h2>
            <p className="section-description">
              A proven methodology that ensures successful automation implementation and maximum ROI.
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
            <h2>AI Automation Packages</h2>
            <p className="section-description">
              Flexible pricing options designed to scale with your automation needs and business growth.
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
            <h2>Ready to Automate Your Business Processes?</h2>
            <p>
              Stop wasting time on repetitive tasks and start focusing on what matters most. 
              Let's discuss your automation needs and create a custom solution that delivers immediate results.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Automation Project <ArrowRight size={20} />
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

        .automation-types-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .automation-type-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .automation-type-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
        }

        .automation-type-icon {
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

export default AIAutomation;