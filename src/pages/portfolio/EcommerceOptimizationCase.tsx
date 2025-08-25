import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, Zap, CheckCircle2, Quote, ShoppingCart, Globe, Target, BarChart } from 'lucide-react';

const EcommerceOptimizationCase: React.FC = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'E-commerce Platform Optimization Case Study | ApexNova AI - 127% Conversion Rate Increase';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ApexNova AI transformed an e-commerce platform with AI-powered optimization, achieving 127% conversion rate increase, 73% faster page load speed, and 156% organic traffic growth.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "name": "E-commerce Platform Optimization Case Study",
      "description": "AI-powered e-commerce optimization achieving 127% conversion rate increase and 156% organic traffic growth",
      "author": {
        "@type": "Organization",
        "name": "ApexNova AI"
      },
      "provider": {
        "@type": "Organization",
        "name": "ApexNova AI",
        "url": "https://getapexnova.com"
      },
      "datePublished": "2025-01-15",
      "industry": "E-commerce Retail",
      "result": [
        {
          "@type": "Result",
          "name": "Conversion Rate Increase",
          "value": "127%"
        },
        {
          "@type": "Result", 
          "name": "Page Load Speed Improvement",
          "value": "73%"
        },
        {
          "@type": "Result",
          "name": "Organic Traffic Growth", 
          "value": "156%"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const projectData = {
    title: 'E-commerce Platform Enhancement',
    industry: 'E-commerce Retail',
    duration: '4 months',
    teamSize: '6 specialists',
    challenge: 'A growing e-commerce retailer faced declining conversion rates, poor site performance, and limited organic search visibility. Their existing platform couldn\'t handle increasing traffic, leading to cart abandonment and lost revenue opportunities.',
    solution: 'We implemented a comprehensive AI-powered optimization strategy including intelligent product recommendations, performance enhancement, advanced SEO implementation, and conversion rate optimization through machine learning algorithms.',
    results: [
      { 
        metric: 'Conversion Rate', 
        value: '127% increase', 
        description: 'Boosted conversion rate from 2.3% to 5.2% through AI-driven optimization', 
        icon: <TrendingUp size={24} /> 
      },
      { 
        metric: 'Page Load Speed', 
        value: '73% faster', 
        description: 'Reduced average page load time from 8.5s to 2.3s across all pages', 
        icon: <Zap size={24} /> 
      },
      { 
        metric: 'Organic Traffic', 
        value: '156% growth', 
        description: 'Increased monthly organic visitors from 45K to 115K through SEO optimization', 
        icon: <Users size={24} /> 
      },
      { 
        metric: 'Revenue Impact', 
        value: '89% boost', 
        description: 'Generated additional monthly revenue of $340K through optimization', 
        icon: <CheckCircle2 size={24} /> 
      }
    ],
    technologies: ['React.js', 'Next.js', 'AI Recommendation Engine', 'Advanced SEO Tools', 'Performance Analytics', 'A/B Testing Platform', 'CDN Optimization', 'Database Optimization'],
    phases: [
      {
        title: 'Performance Audit & Analysis',
        duration: '2 weeks',
        description: 'Comprehensive audit of current platform, identifying performance bottlenecks, SEO gaps, and conversion obstacles.',
        icon: <BarChart size={20} />
      },
      {
        title: 'AI Recommendation System Development',
        duration: '6 weeks',
        description: 'Built machine learning models for personalized product recommendations and dynamic content optimization.',
        icon: <Target size={20} />
      },
      {
        title: 'Technical Optimization & SEO',
        duration: '4 weeks',
        description: 'Implemented performance improvements, technical SEO enhancements, and conversion rate optimization.',
        icon: <Globe size={20} />
      },
      {
        title: 'Testing, Launch & Optimization',
        duration: '4 weeks',
        description: 'A/B testing, gradual rollout, performance monitoring, and continuous optimization based on data.',
        icon: <ShoppingCart size={20} />
      }
    ],
    keyFeatures: [
      {
        title: 'AI-Powered Product Recommendations',
        description: 'Machine learning algorithms analyze customer behavior to suggest relevant products, increasing average order value by 45%.',
        impact: '45% higher AOV'
      },
      {
        title: 'Advanced Search & Filtering',
        description: 'Intelligent search with natural language processing and AI-driven filtering for better product discovery.',
        impact: '67% better findability'
      },
      {
        title: 'Performance Optimization',
        description: 'Comprehensive speed optimization including image optimization, caching strategies, and code splitting.',
        impact: '73% faster loading'
      },
      {
        title: 'SEO & Content Strategy',
        description: 'Technical SEO improvements, content optimization, and structured data implementation for better rankings.',
        impact: '156% traffic growth'
      },
      {
        title: 'Conversion Rate Optimization',
        description: 'Data-driven CRO including checkout optimization, trust signals, and personalized user experiences.',
        impact: '127% conversion boost'
      },
      {
        title: 'Analytics & Insights',
        description: 'Advanced tracking and analytics dashboard providing actionable insights for continuous improvement.',
        impact: '300% better insights'
      }
    ],
    testimonial: {
      quote: "The platform transformation exceeded our expectations. Not only did we see immediate improvements in performance, but the AI recommendations have become a key differentiator for our business. Our customers are finding products they love, and our revenue has grown significantly.",
      author: "Michael Rodriguez",
      role: "E-commerce Director",
      company: "E-commerce Retail Company"
    },
    seoKeywords: ['e-commerce optimization', 'AI product recommendations', 'conversion rate optimization', 'website performance', 'SEO improvement', 'online retail optimization']
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="case-study-page"
    >
      {/* Navigation */}
      <nav className="case-nav">
        <div className="container">
          <Link to="/portfolio" className="back-link">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="case-hero">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-content"
          >
            <div className="project-icon">🛍️</div>
            <h1>{projectData.title}</h1>
            <p className="hero-subtitle">Transforming online retail through AI-powered optimization and performance enhancement</p>
            <div className="project-meta">
              <span className="industry">{projectData.industry}</span>
              <span className="duration">{projectData.duration}</span>
              <span className="team">{projectData.teamSize}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="challenge-solution">
        <div className="container">
          <div className="content-grid">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="challenge-block"
            >
              <h2>The Challenge</h2>
              <p>{projectData.challenge}</p>
              <div className="challenge-metrics">
                <div className="metric">
                  <span className="metric-value">2.3%</span>
                  <span className="metric-label">Conversion Rate</span>
                </div>
                <div className="metric">
                  <span className="metric-value">8.5s</span>
                  <span className="metric-label">Page Load Time</span>
                </div>
                <div className="metric">
                  <span className="metric-value">45K</span>
                  <span className="metric-label">Monthly Visitors</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="solution-block"
            >
              <h2>Our Solution</h2>
              <p>{projectData.solution}</p>
              <div className="solution-highlights">
                <div className="highlight">🎯 AI-Powered Recommendations</div>
                <div className="highlight">⚡ Performance Optimization</div>
                <div className="highlight">🔍 Advanced SEO Strategy</div>
                <div className="highlight">📊 Conversion Rate Optimization</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="section-header"
          >
            <h2>Key Features Implemented</h2>
            <p>Comprehensive e-commerce optimization with cutting-edge AI technology</p>
          </motion.div>
          
          <div className="features-grid">
            {projectData.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="feature-card"
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-impact">{feature.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="results-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="section-header"
          >
            <h2>Measurable Results</h2>
            <p>Transformative improvements across all key performance indicators</p>
          </motion.div>
          
          <div className="results-grid">
            {projectData.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="result-card"
              >
                <div className="result-icon">{result.icon}</div>
                <div className="result-value">{result.value}</div>
                <div className="result-metric">{result.metric}</div>
                <div className="result-description">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h2>Technologies & Tools Used</h2>
            <div className="tech-grid">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="phases-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2>Project Implementation Timeline</h2>
            <div className="timeline">
              {projectData.phases.map((phase, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    {phase.icon}
                  </div>
                  <div className="timeline-content">
                    <h3>{phase.title}</h3>
                    <div className="phase-duration">{phase.duration}</div>
                    <p>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="testimonial-card"
          >
            <Quote size={48} className="quote-icon" />
            <blockquote>{projectData.testimonial.quote}</blockquote>
            <div className="testimonial-author">
              <div className="author-name">{projectData.testimonial.author}</div>
              <div className="author-role">{projectData.testimonial.role}</div>
              <div className="author-company">{projectData.testimonial.company}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-cta">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="cta-content"
          >
            <h2>Ready to Transform Your E-commerce Platform?</h2>
            <p>Let's discuss how we can implement similar AI-powered optimization for your online store</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Optimization
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View More Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .case-study-page {
          min-height: 100vh;
        }

        .case-nav {
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #00D4FF;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #ffffff;
        }

        .case-hero {
          padding: 6rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .project-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.3));
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1rem;
          color: #ffffff;
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.5;
        }

        .project-meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .project-meta span {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .industry { color: #8A2BE2; border-color: rgba(138, 43, 226, 0.3); }
        .duration { color: #00D4FF; border-color: rgba(0, 212, 255, 0.3); }
        .team { color: #00FF7F; border-color: rgba(0, 255, 127, 0.3); }

        .challenge-solution {
          padding: 8rem 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 4rem;
        }

        .challenge-block,
        .solution-block {
          background: rgba(15, 23, 42, 0.6);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .challenge-block h2,
        .solution-block h2 {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }

        .challenge-block p,
        .solution-block p {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .challenge-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .metric {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .metric-value {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ff6b6b;
          margin-bottom: 0.25rem;
        }

        .metric-label {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .solution-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }

        .highlight {
          background: rgba(0, 212, 255, 0.05);
          padding: 0.8rem;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #00D4FF;
          border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .features-section {
          padding: 8rem 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .section-header p {
          color: #94a3b8;
          font-size: 1.2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(15, 23, 42, 0.8);
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 10px 40px rgba(0, 212, 255, 0.1);
        }

        .feature-card h3 {
          color: #00D4FF;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .feature-card p {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-impact {
          background: linear-gradient(135deg, rgba(0, 255, 127, 0.1), rgba(0, 212, 255, 0.1));
          padding: 0.6rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          color: #00FF7F;
          text-align: center;
          border: 1px solid rgba(0, 255, 127, 0.3);
        }

        .results-section {
          padding: 8rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .result-card {
          background: rgba(15, 23, 42, 0.8);
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .result-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 10px 40px rgba(0, 212, 255, 0.1);
        }

        .result-icon {
          color: #00FF7F;
          margin-bottom: 1rem;
        }

        .result-value {
          font-size: 2.2rem;
          font-weight: 700;
          color: #00D4FF;
          margin-bottom: 0.5rem;
        }

        .result-metric {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .result-description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .technologies-section {
          padding: 6rem 0;
        }

        .technologies-section h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 3rem;
          color: #ffffff;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .tech-tag {
          background: rgba(138, 43, 226, 0.15);
          color: #8A2BE2;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          border: 1px solid rgba(138, 43, 226, 0.3);
        }

        .phases-section {
          padding: 8rem 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .phases-section h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 4rem;
          color: #ffffff;
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #00D4FF, #8A2BE2);
        }

        .timeline-item {
          display: flex;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-marker {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00D4FF, #8A2BE2);
          border-radius: 50%;
          flex-shrink: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .timeline-content {
          margin-left: 2rem;
          background: rgba(15, 23, 42, 0.6);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex: 1;
        }

        .timeline-content h3 {
          color: #00D4FF;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .phase-duration {
          color: #8A2BE2;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .timeline-content p {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .testimonial-section {
          padding: 8rem 0;
        }

        .testimonial-card {
          max-width: 900px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
          padding: 4rem;
          border-radius: 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .quote-icon {
          color: #00D4FF;
          margin-bottom: 2rem;
        }

        .testimonial-card blockquote {
          font-size: 1.4rem;
          color: #ffffff;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          font-style: italic;
        }

        .testimonial-author {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
        }

        .author-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #00D4FF;
          margin-bottom: 0.5rem;
        }

        .author-role {
          color: #8A2BE2;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .author-company {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .case-cta {
          padding: 8rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(138, 43, 226, 0.08));
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .case-hero {
            padding: 4rem 0;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .project-meta {
            gap: 1rem;
            flex-direction: column;
            align-items: center;
          }

          .challenge-solution {
            padding: 4rem 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .challenge-block,
          .solution-block {
            padding: 2rem;
          }

          .challenge-metrics {
            grid-template-columns: 1fr;
          }

          .solution-highlights {
            grid-template-columns: 1fr;
          }

          .features-section,
          .results-section,
          .phases-section {
            padding: 4rem 0;
          }

          .features-grid,
          .results-grid {
            grid-template-columns: 1fr;
          }

          .technologies-section {
            padding: 4rem 0;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-marker {
            width: 40px;
            height: 40px;
          }

          .timeline-content {
            margin-left: 1.5rem;
            padding: 1.5rem;
          }

          .testimonial-section {
            padding: 4rem 0;
          }

          .testimonial-card {
            padding: 2.5rem;
          }

          .testimonial-card blockquote {
            font-size: 1.2rem;
          }

          .case-cta {
            padding: 4rem 0;
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

export default EcommerceOptimizationCase;