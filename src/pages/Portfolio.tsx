import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI Chatbot Implementation',
      slug: 'techcorp-ai-chatbot-implementation',
      industry: 'SaaS Technology',
      challenge: 'High volume customer support inquiries overwhelming their team',
      solution: 'Deployed intelligent chatbot handling majority of inquiries automatically',
      results: [
        { metric: 'Response Time', value: '75% faster', icon: <Zap size={20} /> },
        { metric: 'Cost Reduction', value: '60% savings', icon: <TrendingUp size={20} /> },
        { metric: 'Customer Satisfaction', value: '92% rating', icon: <Users size={20} /> }
      ],
      image: '🤖',
      tags: ['Chatbots', 'Customer Service', 'NLP']
    },
    {
      title: 'E-commerce Platform Optimization',
      slug: 'retailmax-e-commerce-optimization',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor SEO performance',
      solution: 'AI-powered website redesign with intelligent product recommendations',
      results: [
        { metric: 'Conversion Rate', value: '85% increase', icon: <TrendingUp size={20} /> },
        { metric: 'Organic Traffic', value: '120% growth', icon: <Users size={20} /> },
        { metric: 'Page Load Speed', value: '65% faster', icon: <Zap size={20} /> }
      ],
      image: '🛍️',
      tags: ['Web Development', 'SEO', 'AI Recommendations']
    },
    {
      title: 'Healthcare AI Phone System',
      slug: 'medpractice-ai-phone-system',
      industry: 'Healthcare',
      challenge: 'Managing appointment bookings and patient inquiries efficiently',
      solution: 'AI-powered phone agent for appointment scheduling and basic inquiries',
      results: [
        { metric: 'Booking Efficiency', value: '90% improvement', icon: <Zap size={20} /> },
        { metric: 'Staff Productivity', value: '70% increase', icon: <Users size={20} /> },
        { metric: 'Patient Satisfaction', value: '94% approval', icon: <TrendingUp size={20} /> }
      ],
      image: '🏥',
      tags: ['Phone Agents', 'Healthcare', 'Appointment Booking']
    },
    {
      title: 'Financial CRM Integration',
      slug: 'financeflow-crm-integration',
      industry: 'Financial Services',
      challenge: 'Disconnected systems causing data silos and inefficiencies',
      solution: 'Comprehensive CRM integration with automated workflow optimization',
      results: [
        { metric: 'Process Efficiency', value: '80% improvement', icon: <Zap size={20} /> },
        { metric: 'Data Accuracy', value: '95% precision', icon: <TrendingUp size={20} /> },
        { metric: 'Processing Speed', value: '75% faster', icon: <Users size={20} /> }
      ],
      image: '💼',
      tags: ['CRM Integration', 'Automation', 'Data Management']
    },
    {
      title: 'Educational Learning Platform',
      slug: 'edutech-learning-platform',
      industry: 'Education Technology',
      challenge: 'Scaling personalized learning experiences for thousands of students',
      solution: 'AI-driven learning platform with adaptive content delivery',
      results: [
        { metric: 'Learning Outcomes', value: '45% improvement', icon: <TrendingUp size={20} /> },
        { metric: 'Student Engagement', value: '65% increase', icon: <Users size={20} /> },
        { metric: 'Operational Efficiency', value: '55% boost', icon: <Zap size={20} /> }
      ],
      image: '🎓',
      tags: ['EdTech', 'AI Learning', 'Personalization']
    },
    {
      title: 'Supply Chain AI Optimization',
      slug: 'logiflow-supply-chain-ai',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and inventory management',
      solution: 'AI-powered logistics optimization and predictive analytics',
      results: [
        { metric: 'Cost Reduction', value: '25% savings', icon: <TrendingUp size={20} /> },
        { metric: 'Delivery Speed', value: '35% faster', icon: <Zap size={20} /> },
        { metric: 'Accuracy', value: '90% precision', icon: <Users size={20} /> }
      ],
      image: '🚛',
      tags: ['Logistics', 'Optimization', 'Predictive Analytics']
    }
  ];

  const testimonials = [
    {
      quote: "ApexNova AI transformed our customer service completely. The chatbot they built handles complex inquiries better than we imagined possible.",
      author: "Sarah Johnson",
      title: "CTO, SaaS Technology Company",
      company: "Technology Sector"
    },
    {
      quote: "The ROI was incredible. Within 3 months, we saw significant increases in conversions and our organic traffic grew substantially.",
      author: "Michael Chen",
      title: "Marketing Director, E-commerce Platform",
      company: "E-commerce Sector"
    },
    {
      quote: "Our patients love the AI phone system. It's available 24/7 and handles appointments flawlessly. It's like having a perfect receptionist that never sleeps.",
      author: "Dr. Emily Rodriguez",
      title: "Practice Owner, Healthcare Clinic",
      company: "Healthcare Sector"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Header */}
      <section className="portfolio-header">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="header-content"
          >
            <h1>Success Stories</h1>
            <p className="header-description">
              Real results from real businesses. See how our AI solutions have transformed 
              operations and driven measurable growth for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card case-study-card"
              >
                <div className="case-study-header">
                  <div className="case-study-icon">{study.image}</div>
                  <div className="case-study-title">
                    <h3>{study.title}</h3>
                    <div className="industry-tag">{study.industry}</div>
                  </div>
                </div>

                <div className="case-study-content">
                  <div className="challenge-solution">
                    <div className="challenge">
                      <strong>Challenge:</strong> {study.challenge}
                    </div>
                    <div className="solution">
                      <strong>Solution:</strong> {study.solution}
                    </div>
                  </div>

                  <div className="results">
                    <h4>Key Results:</h4>
                    <div className="results-grid">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="result-item">
                          <div className="result-icon">{result.icon}</div>
                          <div className="result-content">
                            <div className="result-value">{result.value}</div>
                            <div className="result-metric">{result.metric}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="case-study-tags">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="case-study-footer">
                  <Link 
                    to={`/portfolio/${study.slug}`}
                    className="btn btn-secondary case-study-btn"
                  >
                    View Details <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What Our Clients Say</h2>
            <p className="section-description">
              Don't just take our word for it. Here's what business leaders are saying about our AI solutions.
            </p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="card testimonial-card"
              >
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-title">{testimonial.title}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>
              Join these successful businesses and transform your operations with AI. 
              Let's discuss how we can deliver similar results for your company.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .portfolio-header {
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

        .case-study-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
        }

        .case-study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 212, 255, 0.15);
        }

        .case-study-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .case-study-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .case-study-title h3 {
          margin-bottom: 0.5rem;
          color: #00D4FF;
        }

        .industry-tag {
          background: rgba(138, 43, 226, 0.2);
          color: #8A2BE2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(138, 43, 226, 0.3);
          display: inline-block;
        }

        .case-study-content {
          flex: 1;
          margin-bottom: 2rem;
        }

        .challenge-solution {
          margin-bottom: 2rem;
        }

        .challenge,
        .solution {
          margin-bottom: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .challenge strong,
        .solution strong {
          color: #00D4FF;
        }

        .results h4 {
          color: #8A2BE2;
          margin-bottom: 1.5rem;
        }

        .results-grid {
          display: grid;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 10px;
        }

        .result-icon {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .result-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #00D4FF;
          margin-bottom: 0.25rem;
        }

        .result-metric {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .case-study-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: rgba(0, 255, 127, 0.1);
          color: #00FF7F;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 255, 127, 0.3);
        }

        .case-study-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .case-study-btn {
          width: 100%;
          justify-content: center;
        }

        .testimonials-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .section-description {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonial-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .testimonial-quote {
          font-size: 1.1rem;
          color: #cbd5e1;
          font-style: italic;
          line-height: 1.6;
          flex: 1;
          margin-bottom: 2rem;
        }

        .testimonial-author {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .author-name {
          font-weight: 600;
          color: #00D4FF;
          margin-bottom: 0.25rem;
        }

        .author-title {
          color: #8A2BE2;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .author-company {
          color: #94a3b8;
          font-size: 0.8rem;
        }

        .portfolio-cta {
          padding: 6rem 0;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
          margin: 4rem 0 0;
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
          .portfolio-header {
            padding: 6rem 0 3rem;
          }

          .case-study-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .result-item {
            text-align: center;
          }

          .case-study-tags {
            justify-content: center;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Portfolio;