import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, CheckCircle, Code, Smartphone, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const WebsiteDevelopment: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Custom Development',
      description: 'Built from scratch with clean, maintainable code tailored to your specific needs.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First Design',
      description: 'Responsive websites that look perfect on all devices, from smartphones to desktops.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with advanced caching and performance techniques.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise Security',
      description: 'Built with security best practices and regular security updates.'
    }
  ];

  const benefits = [
    'Professional, modern design that builds trust',
    'Mobile-responsive across all devices',
    'SEO-optimized for maximum visibility',
    'Fast loading times under 3 seconds',
    'Secure hosting and SSL certificates',
    'Content management system included',
    'Analytics and tracking setup',
    'Ongoing maintenance and support'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business needs, target audience, and goals to create a comprehensive strategy.'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Create wireframes and design mockups that align with your brand and user experience goals.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your website using modern technologies, with thorough testing across all devices.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploy your website and optimize performance, with ongoing monitoring and improvements.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        'SSL certificate',
        '3 months support'
      ]
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design & animations',
        'Advanced SEO optimization',
        'CMS integration',
        'E-commerce ready',
        'Analytics setup',
        '6 months support'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'API integrations',
        'Advanced security',
        'Multi-language support',
        'Dedicated support team',
        '12 months support'
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
            <span className="breadcrumb-current">Website Development</span>
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
              <Globe size={60} />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Website Development Services
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Transform your online presence with custom AI-powered websites that convert visitors into customers. 
              We build fast, secure, and scalable websites that grow with your business and deliver exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary">
                Get Started Today <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Why Choose Our Website Development Services?</h2>
            <p className="section-description">
              We combine cutting-edge technology with proven design principles to create websites that drive results.
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

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>What You Get With Our Website Development</h2>
              <p>
                Our comprehensive website development service includes everything you need to establish a strong online presence. 
                From initial concept to ongoing maintenance, we handle every aspect of your website project with expertise and attention to detail.
              </p>
              <p>
                We understand that your website is often the first impression potential customers have of your business. 
                That's why we focus on creating websites that not only look beautiful but also perform exceptionally well, 
                convert visitors into customers, and support your business growth objectives.
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
                <h3>300%</h3>
                <p>Average increase in conversions</p>
              </div>
              <div className="benefit-stat">
                <Zap size={32} />
                <h3>&lt;3s</h3>
                <p>Average page load time</p>
              </div>
              <div className="benefit-stat">
                <Users size={32} />
                <h3>99%</h3>
                <p>Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Development Process</h2>
            <p className="section-description">
              A proven methodology that ensures your website project is delivered on time, on budget, and exceeds expectations.
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
            <h2>Website Development Pricing</h2>
            <p className="section-description">
              Transparent pricing with no hidden fees. Choose the package that best fits your business needs.
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
            <h2>Ready to Launch Your Dream Website?</h2>
            <p>
              Let's discuss your project and create a website that drives real results for your business. 
              Get started with a free consultation and detailed project proposal.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={20} />
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
          font-size: 3rem;
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

export default WebsiteDevelopment;