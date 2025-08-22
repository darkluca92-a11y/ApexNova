import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI technology to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: <Users size={32} />,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the growth and efficiency gains of our clients.'
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Creative Solutions',
      description: 'Every business is unique. We craft custom AI solutions tailored to your specific challenges and goals.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & AI Strategist',
      description: 'Former Google AI engineer with 10+ years in machine learning and business automation.',
      expertise: ['AI Strategy', 'Machine Learning', 'Business Growth']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Lead Developer',
      description: 'Full-stack developer and AI specialist who has built systems serving millions of users.',
      expertise: ['System Architecture', 'AI Development', 'Scalable Solutions']
    },
    {
      name: 'Emily Watson',
      role: 'Head of Client Success',
      description: 'Expert in translating complex AI capabilities into tangible business value for our clients.',
      expertise: ['Client Relations', 'Project Management', 'ROI Optimization']
    },
    {
      name: 'David Kim',
      role: 'Senior AI Engineer',
      description: 'PhD in Computer Science specializing in natural language processing and conversational AI.',
      expertise: ['NLP', 'Chatbot Development', 'Voice AI']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '300%', label: 'Average ROI' },
    { number: '5', label: 'Years Experience' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="header-content"
          >
            <h1>About ApexNova AI</h1>
            <p className="header-description">
              We're a team of AI experts, developers, and strategists dedicated to transforming 
              businesses through intelligent automation and cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <motion.h2
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                To democratize artificial intelligence by making advanced AI solutions accessible 
                and practical for businesses of all sizes. We believe that every company deserves 
                the competitive advantage that comes with intelligent automation.
              </motion.p>
              <motion.p
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Since our founding, we've helped hundreds of businesses streamline operations, 
                reduce costs, and scale efficiently through custom AI implementations.
              </motion.p>
            </div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mission-stats"
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Core Values</h2>
            <p className="section-description">
              The principles that drive everything we do and every solution we create
            </p>
          </div>
          <div className="grid grid-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="card value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Meet Our Team</h2>
            <p className="section-description">
              World-class experts in AI, development, and business strategy
            </p>
          </div>
          <div className="grid grid-2">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card team-card"
              >
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p>{member.description}</p>
                  <div className="team-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <h2>Why Choose ApexNova AI?</h2>
            <div className="grid grid-3 mt-4">
              <div className="advantage-item">
                <Zap className="advantage-icon" size={32} />
                <h4>Rapid Implementation</h4>
                <p>Get your AI solutions deployed quickly with our streamlined development process.</p>
              </div>
              <div className="advantage-item">
                <Shield className="advantage-icon" size={32} />
                <h4>Enterprise Security</h4>
                <p>Your data is protected with enterprise-grade security and compliance standards.</p>
              </div>
              <div className="advantage-item">
                <Users className="advantage-icon" size={32} />
                <h4>Ongoing Support</h4>
                <p>24/7 support and continuous optimization to ensure your AI systems perform at their best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-header {
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

        .mission-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .mission-text h2 {
          margin-bottom: 2rem;
        }

        .mission-text p {
          font-size: 1.2rem;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .mission-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 15px;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #00D4FF;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .values-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .section-description {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .value-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .team-card {
          display: flex;
          gap: 2rem;
          text-align: left;
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00D4FF, #8A2BE2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .team-info h3 {
          margin-bottom: 0.5rem;
          color: #00D4FF;
        }

        .team-role {
          color: #8A2BE2;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .team-info p {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .team-expertise {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .expertise-tag {
          background: rgba(0, 255, 127, 0.1);
          color: #00FF7F;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 255, 127, 0.3);
        }

        .why-choose-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(138, 43, 226, 0.05));
        }

        .why-choose-content h2 {
          text-align: center;
          margin-bottom: 3rem;
        }

        .advantage-item {
          text-align: center;
          padding: 2rem;
        }

        .advantage-icon {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .advantage-item h4 {
          color: #8A2BE2;
          margin-bottom: 1rem;
        }

        .advantage-item p {
          color: #94a3b8;
          font-size: 1rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .mission-stats {
            justify-items: center;
          }
        }

        @media (max-width: 768px) {
          .about-header {
            padding: 6rem 0 3rem;
          }

          .team-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .team-avatar {
            margin: 0 auto;
          }

          .mission-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .team-expertise {
            justify-content: center;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default About;