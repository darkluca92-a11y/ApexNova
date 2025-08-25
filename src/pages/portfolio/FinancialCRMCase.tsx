import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, CheckCircle2, Clock, TrendingUp, Quote, Database, Shield, BarChart, Link2 } from 'lucide-react';

const FinancialCRMCase: React.FC = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'Financial CRM Integration Case Study | ApexNova AI - 81% Process Efficiency Improvement';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ApexNova AI transformed financial services with smart CRM integration, achieving 81% process efficiency improvement, 97% data accuracy, and 52% revenue growth through automated workflows.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "name": "Financial CRM Integration Case Study",
      "description": "Smart CRM integration for financial services achieving 81% process efficiency improvement and 52% revenue growth",
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
      "industry": "Financial Services",
      "result": [
        {
          "@type": "Result",
          "name": "Process Efficiency Improvement",
          "value": "81%"
        },
        {
          "@type": "Result",
          "name": "Data Accuracy",
          "value": "97%"
        },
        {
          "@type": "Result",
          "name": "Revenue Growth",
          "value": "52%"
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
    title: 'Smart CRM Integration Suite',
    industry: 'Financial Services',
    duration: '5 months',
    teamSize: '8 specialists',
    challenge: 'A growing financial services firm struggled with fragmented data across multiple systems, creating operational inefficiencies, missed client opportunities, and compliance risks. Manual data entry and disconnected workflows were hindering growth and client service quality.',
    solution: 'We designed and implemented a comprehensive CRM integration platform with automated workflows, real-time data synchronization, intelligent client insights, and regulatory compliance features tailored for financial services.',
    results: [
      { 
        metric: 'Process Efficiency', 
        value: '81% improvement', 
        description: 'Streamlined workflows reduced manual tasks and processing time significantly', 
        icon: <Zap size={24} /> 
      },
      { 
        metric: 'Data Accuracy', 
        value: '97% precision', 
        description: 'Automated data validation and synchronization eliminated most errors', 
        icon: <CheckCircle2 size={24} /> 
      },
      { 
        metric: 'Client Response Time', 
        value: '79% faster', 
        description: 'Unified client view enabled rapid response to inquiries and needs', 
        icon: <Clock size={24} /> 
      },
      { 
        metric: 'Revenue Growth', 
        value: '52% increase', 
        description: 'Better client management and insights led to more successful outcomes', 
        icon: <TrendingUp size={24} /> 
      }
    ],
    technologies: ['Salesforce Integration', 'Microsoft Dynamics', 'Financial APIs', 'Data Analytics Platform', 'Compliance Automation', 'Real-time Sync', 'Business Intelligence', 'Security Framework'],
    phases: [
      {
        title: 'System Architecture & Planning',
        duration: '3 weeks',
        description: 'Comprehensive analysis of existing systems, data mapping, and integration architecture design with compliance requirements.',
        icon: <Database size={20} />
      },
      {
        title: 'Core Integration Development',
        duration: '8 weeks',
        description: 'Built secure integration platform with real-time data synchronization, automated workflows, and intelligent routing.',
        icon: <Link2 size={20} />
      },
      {
        title: 'Analytics & Compliance Layer',
        duration: '6 weeks',
        description: 'Implemented business intelligence dashboard, automated compliance reporting, and advanced analytics capabilities.',
        icon: <BarChart size={20} />
      },
      {
        title: 'Security & Deployment',
        duration: '3 weeks',
        description: 'Security hardening, staff training, phased rollout, and continuous monitoring implementation.',
        icon: <Shield size={20} />
      }
    ],
    keyFeatures: [
      {
        title: 'Unified Client Dashboard',
        description: 'Complete 360-degree client view aggregating data from all touchpoints, providing comprehensive client insights and history.',
        impact: '85% better visibility'
      },
      {
        title: 'Automated Workflow Engine',
        description: 'Intelligent workflow automation for client onboarding, document processing, and compliance checks with minimal manual intervention.',
        impact: '73% time savings'
      },
      {
        title: 'Real-Time Data Synchronization',
        description: 'Instant data updates across all connected systems ensuring consistency and eliminating data silos throughout the organization.',
        impact: '97% data accuracy'
      },
      {
        title: 'Compliance Automation',
        description: 'Automated regulatory reporting, audit trails, and compliance monitoring with built-in financial industry standards.',
        impact: '90% compliance efficiency'
      },
      {
        title: 'Advanced Analytics & Reporting',
        description: 'Business intelligence dashboard with predictive analytics, client insights, and performance metrics for data-driven decisions.',
        impact: '156% better insights'
      },
      {
        title: 'Mobile Access & Alerts',
        description: 'Mobile-responsive interface with real-time notifications and alerts for critical client interactions and opportunities.',
        impact: '24/7 accessibility'
      }
    ],
    testimonial: {
      quote: "The CRM integration eliminated our data silos completely and gave us a 360-degree view of our clients. Our team's productivity has soared, and we're closing deals faster than ever. The automated compliance features alone have saved us countless hours.",
      author: "David Thompson",
      role: "Operations Director",
      company: "Financial Services Firm"
    },
    seoKeywords: ['CRM integration', 'financial services automation', 'data synchronization', 'workflow automation', 'financial compliance', 'business intelligence']
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
            <div className="project-icon">💼</div>
            <h1>{projectData.title}</h1>
            <p className="hero-subtitle">Transforming financial operations through intelligent CRM integration and automation</p>
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
                  <span className="metric-value">12</span>
                  <span className="metric-label">Disconnected Systems</span>
                </div>
                <div className="metric">
                  <span className="metric-value">35%</span>
                  <span className="metric-label">Data Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">4 hrs</span>
                  <span className="metric-label">Daily Manual Work</span>
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
                <div className="highlight">🔗 Unified Integration</div>
                <div className="highlight">⚡ Automated Workflows</div>
                <div className="highlight">📊 Real-Time Analytics</div>
                <div className="highlight">🛡️ Compliance Ready</div>
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
            <h2>Advanced CRM Integration Features</h2>
            <p>Comprehensive financial services platform designed for efficiency and compliance</p>
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
            <h2>Business Impact Results</h2>
            <p>Measurable improvements across operational efficiency and business growth</p>
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
            <h2>Financial Technologies & Integration</h2>
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
            <h2>Implementation Phases</h2>
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
            <h2>Ready to Integrate Your Financial Systems?</h2>
            <p>Let's discuss how smart CRM integration can transform your financial services operations</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Integration Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View More Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Same comprehensive styling as previous case studies */}
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

export default FinancialCRMCase;