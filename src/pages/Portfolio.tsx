import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap, Clock, CheckCircle2 } from 'lucide-react';

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      id: 'ai-chatbot-saas',
      title: 'AI Customer Support Chatbot',
      slug: 'ai-customer-support-chatbot',
      industry: 'SaaS Technology',
      duration: '3 months',
      challenge: 'High volume customer support inquiries overwhelming their team, leading to long response times and decreased satisfaction',
      solution: 'Deployed intelligent NLP-powered chatbot with custom knowledge base integration and seamless human handoff',
      results: [
        { metric: 'Response Time', value: '85% faster', icon: <Zap size={20} /> },
        { metric: 'Cost Reduction', value: '65% savings', icon: <TrendingUp size={20} /> },
        { metric: 'Customer Satisfaction', value: '94% rating', icon: <Users size={20} /> },
        { metric: 'Resolution Rate', value: '78% automated', icon: <CheckCircle2 size={20} /> }
      ],
      image: '🤖',
      tags: ['AI Chatbots', 'Customer Service', 'NLP', 'Automation'],
      testimonial: "The AI chatbot transformed our support workflow completely. Response times dropped dramatically and our team can focus on complex issues while the bot handles routine inquiries flawlessly.",
      clientRole: 'Head of Customer Success'
    },
    {
      id: 'ecommerce-optimization',
      title: 'E-commerce Platform Enhancement',
      slug: 'ecommerce-platform-optimization',
      industry: 'E-commerce Retail',
      duration: '4 months',
      challenge: 'Low conversion rates, poor site performance, and declining organic search visibility impacting revenue growth',
      solution: 'Comprehensive website optimization with AI-powered product recommendations, performance tuning, and SEO strategy',
      results: [
        { metric: 'Conversion Rate', value: '127% increase', icon: <TrendingUp size={20} /> },
        { metric: 'Page Load Speed', value: '73% faster', icon: <Zap size={20} /> },
        { metric: 'Organic Traffic', value: '156% growth', icon: <Users size={20} /> },
        { metric: 'Revenue Impact', value: '89% boost', icon: <CheckCircle2 size={20} /> }
      ],
      image: '🛍️',
      tags: ['Web Development', 'SEO', 'Performance', 'AI Recommendations'],
      testimonial: "The platform transformation exceeded our expectations. Not only did we see immediate improvements in performance, but the AI recommendations have become a key differentiator for our business.",
      clientRole: 'E-commerce Director'
    },
    {
      id: 'healthcare-phone-system',
      title: 'AI-Powered Phone Assistant',
      slug: 'healthcare-ai-phone-system',
      industry: 'Healthcare Services',
      duration: '2 months',
      challenge: 'Overwhelming appointment booking requests and patient inquiries causing staff burnout and missed opportunities',
      solution: 'Implemented intelligent phone system with natural voice processing for appointment scheduling and basic patient support',
      results: [
        { metric: 'Booking Efficiency', value: '92% improvement', icon: <Clock size={20} /> },
        { metric: 'Staff Productivity', value: '68% increase', icon: <Users size={20} /> },
        { metric: 'Patient Satisfaction', value: '96% approval', icon: <TrendingUp size={20} /> },
        { metric: 'Call Resolution', value: '84% automated', icon: <CheckCircle2 size={20} /> }
      ],
      image: '🏥',
      tags: ['AI Phone Agents', 'Healthcare', 'Voice AI', 'Scheduling'],
      testimonial: "Our patients love the 24/7 availability and the natural conversation flow. It feels like talking to a real person, and our staff can now focus on providing better care instead of managing calls.",
      clientRole: 'Practice Administrator'
    },
    {
      id: 'crm-integration',
      title: 'Smart CRM Integration Suite',
      slug: 'financial-crm-automation',
      industry: 'Financial Services',
      duration: '5 months',
      challenge: 'Fragmented data across multiple systems creating inefficiencies and missed client opportunities',
      solution: 'Built comprehensive CRM integration with automated workflows, data synchronization, and intelligent client insights',
      results: [
        { metric: 'Process Efficiency', value: '81% improvement', icon: <Zap size={20} /> },
        { metric: 'Data Accuracy', value: '97% precision', icon: <CheckCircle2 size={20} /> },
        { metric: 'Client Response Time', value: '79% faster', icon: <Clock size={20} /> },
        { metric: 'Revenue Growth', value: '52% increase', icon: <TrendingUp size={20} /> }
      ],
      image: '💼',
      tags: ['CRM Integration', 'Automation', 'Data Analytics', 'Workflows'],
      testimonial: "The integration eliminated data silos and gave us a 360-degree view of our clients. Our team's productivity has soared, and we're closing deals faster than ever.",
      clientRole: 'Operations Director'
    },
    {
      id: 'learning-platform',
      title: 'Adaptive Learning Platform',
      slug: 'ai-learning-platform',
      industry: 'Education Technology',
      duration: '6 months',
      challenge: 'Scaling personalized education for thousands of students while maintaining quality and engagement',
      solution: 'Developed AI-driven learning platform with adaptive content delivery, progress tracking, and personalized recommendations',
      results: [
        { metric: 'Learning Outcomes', value: '67% improvement', icon: <TrendingUp size={20} /> },
        { metric: 'Student Engagement', value: '89% increase', icon: <Users size={20} /> },
        { metric: 'Completion Rate', value: '74% higher', icon: <CheckCircle2 size={20} /> },
        { metric: 'Instructor Efficiency', value: '58% boost', icon: <Zap size={20} /> }
      ],
      image: '🎓',
      tags: ['EdTech', 'AI Learning', 'Personalization', 'Analytics'],
      testimonial: "The platform revolutionized how we deliver education. Students are more engaged, learning outcomes have improved significantly, and our instructors can focus on what they do best.",
      clientRole: 'Academic Director'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Intelligence',
      slug: 'supply-chain-ai-optimization',
      industry: 'Logistics & Manufacturing',
      duration: '4 months',
      challenge: 'Inefficient route planning and inventory management leading to increased costs and delivery delays',
      solution: 'Implemented AI-powered logistics optimization with predictive analytics, route planning, and inventory forecasting',
      results: [
        { metric: 'Cost Reduction', value: '34% savings', icon: <TrendingUp size={20} /> },
        { metric: 'Delivery Speed', value: '47% faster', icon: <Zap size={20} /> },
        { metric: 'Inventory Accuracy', value: '93% precision', icon: <CheckCircle2 size={20} /> },
        { metric: 'Route Efficiency', value: '62% improvement', icon: <Clock size={20} /> }
      ],
      image: '🚛',
      tags: ['Supply Chain', 'AI Optimization', 'Predictive Analytics', 'Logistics'],
      testimonial: "The AI system transformed our entire supply chain operation. We're saving significant costs while delivering faster than our competitors.",
      clientRole: 'Supply Chain Manager'
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
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-content"
          >
            <h1>Success Stories</h1>
            <p className="hero-description">
              Real results from real businesses. Discover how our AI solutions have transformed 
              operations, increased efficiency, and driven measurable growth across industries.
            </p>
            <div className="portfolio-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">3.2M</span>
                <span className="stat-label">Hours Automated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="portfolio-grid">
        <div className="container">
          <div className="grid-layout">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="case-study-card"
              >
                <div className="card-header">
                  <div className="project-icon">{study.image}</div>
                  <div className="project-meta">
                    <span className="industry-tag">{study.industry}</span>
                    <span className="duration-tag">
                      <Clock size={14} />
                      {study.duration}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="project-title">{study.title}</h3>
                  <p className="project-challenge">{study.challenge}</p>
                  
                  <div className="results-preview">
                    <div className="results-grid">
                      {study.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="result-item">
                          <div className="result-icon">{result.icon}</div>
                          <div className="result-data">
                            <span className="result-value">{result.value}</span>
                            <span className="result-metric">{result.metric}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-tags">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="tag tag-more">+{study.tags.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="card-footer">
                  <Link 
                    to={`/portfolio/${study.slug}`}
                    className="view-case-study"
                  >
                    View Full Case Study
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="cta-content"
          >
            <h2>Ready to Create Your Success Story?</h2>
            <p>
              Join these successful businesses and transform your operations with AI. 
              Let's discuss how we can deliver similar results for your company.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .portfolio-hero {
          padding: 8rem 0 6rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
          border-radius: 0 0 50px 50px;
          margin-bottom: 6rem;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #00D4FF, #8A2BE2, #00FF7F);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .hero-description {
          font-size: 1.4rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 4rem;
        }

        .portfolio-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #00D4FF;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #8A2BE2;
          font-weight: 500;
          font-size: 1rem;
        }

        .portfolio-grid {
          padding: 2rem 0 6rem;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .case-study-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .case-study-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00D4FF, #8A2BE2, #00FF7F);
        }

        .case-study-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .project-icon {
          font-size: 3.5rem;
          filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .industry-tag {
          background: rgba(138, 43, 226, 0.2);
          color: #8A2BE2;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(138, 43, 226, 0.3);
        }

        .duration-tag {
          background: rgba(0, 212, 255, 0.1);
          color: #00D4FF;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .card-content {
          margin-bottom: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .project-challenge {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .results-preview {
          margin-bottom: 2rem;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .result-item {
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.15);
          border-radius: 12px;
          padding: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .result-icon {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .result-data {
          min-width: 0;
        }

        .result-value {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .result-metric {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tag {
          background: rgba(0, 255, 127, 0.1);
          color: #00FF7F;
          padding: 0.4rem 0.9rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 255, 127, 0.2);
        }

        .tag-more {
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .card-footer {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .view-case-study {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #00D4FF;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .view-case-study:hover {
          color: #ffffff;
          gap: 0.8rem;
        }

        .portfolio-cta {
          padding: 8rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(138, 43, 226, 0.08));
          border-radius: 50px 50px 0 0;
          margin-top: 4rem;
        }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .cta-content p {
          font-size: 1.3rem;
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
          .portfolio-hero {
            padding: 6rem 0 4rem;
            margin-bottom: 4rem;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.2rem;
            margin-bottom: 3rem;
          }

          .portfolio-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .grid-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .case-study-card {
            padding: 2rem;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .project-meta {
            align-items: flex-start;
            flex-direction: row;
            gap: 1rem;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .cta-content h2 {
            font-size: 2rem;
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

export default Portfolio;