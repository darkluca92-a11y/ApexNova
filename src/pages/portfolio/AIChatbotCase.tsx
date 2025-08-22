import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Users, TrendingUp, CheckCircle2, Quote } from 'lucide-react';

const AIChatbotCase: React.FC = () => {
  const projectData = {
    title: 'AI Customer Support Chatbot',
    industry: 'SaaS Technology',
    duration: '3 months',
    teamSize: '4 specialists',
    challenge: 'A fast-growing SaaS company was overwhelmed with customer support inquiries, leading to long response times, decreased customer satisfaction, and burnout among support staff.',
    solution: 'We deployed an intelligent NLP-powered chatbot with custom knowledge base integration, seamless human handoff capabilities, and continuous learning mechanisms.',
    results: [
      { metric: 'Response Time', value: '85% faster', description: 'Average response time reduced from 4 hours to 45 minutes', icon: <Zap size={24} /> },
      { metric: 'Cost Reduction', value: '65% savings', description: 'Reduced support team overhead while handling 3x more inquiries', icon: <TrendingUp size={24} /> },
      { metric: 'Customer Satisfaction', value: '94% rating', description: 'Customer satisfaction scores increased from 72% to 94%', icon: <Users size={24} /> },
      { metric: 'Resolution Rate', value: '78% automated', description: 'Successfully automated resolution of routine inquiries', icon: <CheckCircle2 size={24} /> }
    ],
    technologies: ['Natural Language Processing', 'Machine Learning', 'Knowledge Graph', 'API Integration', 'Real-time Analytics'],
    phases: [
      {
        title: 'Discovery & Analysis',
        duration: '2 weeks',
        description: 'Analyzed existing support tickets, identified common patterns, and mapped customer journey.'
      },
      {
        title: 'AI Model Development',
        duration: '6 weeks',
        description: 'Built custom NLP models, trained on company-specific data, and developed intent recognition.'
      },
      {
        title: 'Integration & Testing',
        duration: '3 weeks',
        description: 'Integrated with existing systems, conducted extensive testing, and refined responses.'
      },
      {
        title: 'Launch & Optimization',
        duration: '3 weeks',
        description: 'Gradual rollout with continuous monitoring and performance optimization.'
      }
    ],
    testimonial: {
      quote: "The AI chatbot transformed our support workflow completely. Response times dropped dramatically and our team can focus on complex issues while the bot handles routine inquiries flawlessly. It's like having a perfect support agent that never sleeps.",
      author: "Sarah Chen",
      role: "Head of Customer Success",
      company: "SaaS Technology Company"
    }
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
            <div className="project-icon">🤖</div>
            <h1>{projectData.title}</h1>
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
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="solution-block"
            >
              <h2>Our Solution</h2>
              <p>{projectData.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="results-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="section-header"
          >
            <h2>Measurable Results</h2>
            <p>The impact of our AI chatbot implementation was immediate and significant</p>
          </motion.div>
          
          <div className="results-grid">
            {projectData.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
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
            transition={{ delay: 0.7 }}
          >
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="phases-section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2>Project Timeline</h2>
            <div className="timeline">
              {projectData.phases.map((phase, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
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
            transition={{ delay: 0.9 }}
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
            transition={{ delay: 1 }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Customer Support?</h2>
            <p>Let's discuss how we can implement a similar AI solution for your business</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
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
          max-width: 800px;
          margin: 0 auto;
        }

        .project-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.3));
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 2rem;
          color: #ffffff;
          font-weight: 700;
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
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
        }

        .results-section {
          padding: 8rem 0;
          background: rgba(0, 0, 0, 0.2);
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
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
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
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #00D4FF, #8A2BE2);
          border-radius: 50%;
          flex-shrink: 0;
          z-index: 1;
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

          .results-section {
            padding: 4rem 0;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .technologies-section,
          .phases-section {
            padding: 4rem 0;
          }

          .timeline::before {
            left: 15px;
          }

          .timeline-marker {
            width: 30px;
            height: 30px;
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

export default AIChatbotCase;