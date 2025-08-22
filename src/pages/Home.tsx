import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Trophy, TrendingUp } from 'lucide-react';
import { TestimonialsSection } from '../components/ui/testimonials-with-marquee';

const Home: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Custom AI-powered websites that convert visitors into customers'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to dominate search rankings'
    },
    {
      icon: '🤖',
      title: 'AI Chatbots',
      description: '24/7 intelligent customer service that never sleeps'
    },
    {
      icon: '📞',
      title: 'AI Phone Agents',
      description: 'Automated phone systems that sound completely human'
    }
  ];

  const stats = [
    { icon: <Users size={24} />, number: '500+', label: 'Clients Served' },
    { icon: <Trophy size={24} />, number: '98%', label: 'Success Rate' },
    { icon: <TrendingUp size={24} />, number: '300%', label: 'ROI Average' },
    { icon: <Zap size={24} />, number: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      author: {
        name: "Sarah Chen",
        handle: "@sarahchenai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "ApexNova AI transformed our customer service completely. The chatbot handles complex inquiries better than we imagined possible. ROI was immediate.",
      href: "#"
    },
    {
      author: {
        name: "Michael Rodriguez",
        handle: "@michaeltech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The website development and SEO optimization delivered incredible results. 145% increase in conversions within 3 months. Highly recommended!",
      href: "#"
    },
    {
      author: {
        name: "Dr. Emily Watson",
        handle: "@dremilyai",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Our patients love the AI phone system. It's available 24/7 and handles appointments flawlessly. Like having a perfect receptionist that never sleeps."
    },
    {
      author: {
        name: "James Park",
        handle: "@jamesparkdev",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "The CRM integration streamlined our entire workflow. 180% improvement in process efficiency and 99.5% data accuracy. Game-changing results."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-title"
            >
              Igniting Business Innovation with AI Excellence
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Transform your business with cutting-edge AI solutions. From intelligent websites 
              to automated customer service, we deliver results that drive growth and efficiency.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary">
                Start Your AI Journey <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our AI-Powered Services</h2>
            <p className="section-description">
              Comprehensive solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="card service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-secondary">
              Explore All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="stat-item"
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Trusted by Business Leaders Worldwide"
        description="Join hundreds of companies who've revolutionized their operations with our AI solutions"
        testimonials={testimonials}
        className="bg-transparent"
      />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join hundreds of companies who've revolutionized their operations with our AI solutions. 
              Let's discuss how we can accelerate your growth.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 12rem 0 8rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          margin-bottom: 2rem;
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1.1;
        }

        .hero-description {
          font-size: 1.3rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.6;
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
          margin: 0 auto 3rem;
        }

        .service-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .stats-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
          margin: 4rem 0;
        }

        .stat-item {
          text-align: center;
          padding: 2rem;
        }

        .stat-icon {
          color: #00D4FF;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #00FF7F;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 1.1rem;
        }

        .cta-section {
          padding: 6rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
          border-radius: 30px;
          margin: 4rem 0;
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

        @media (max-width: 768px) {
          .hero {
            padding: 10rem 0 6rem;
          }
          
          .hero-actions {
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

export default Home;