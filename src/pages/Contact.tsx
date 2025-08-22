import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Clock, MessageSquare } from 'lucide-react';
import { ContactService, ContactSubmission } from '../lib/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    setSubmitError('');
    setSubmitMessage('');
    setIsLoading(true);

    try {
      // Prepare form data for submission
      const submissionData: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'> = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        company: formData.company.trim() || undefined,
        phone: formData.phone.trim() || undefined,
        service: formData.service,
        budget: formData.budget || undefined,
        timeline: formData.timeline || undefined,
        message: formData.message.trim(),
      };

      // Submit to Supabase
      const result = await ContactService.submitContact(submissionData);

      if (result.success) {
        setSubmitMessage(result.message || 'Thank you for your inquiry!');
        setIsSubmitted(true);
        
        // Clear form data
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
          timeline: ''
        });

        // Reset success state after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitMessage('');
        }, 10000);
      } else {
        setSubmitError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: 'hello@apexnovaai.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm PST'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting at our office'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Live Chat',
      details: 'Available Now',
      description: 'Chat with our AI experts instantly'
    }
  ];

  const services = [
    'Website Development',
    'SEO Optimization',
    'AI Chatbots',
    'AI Phone Agents',
    'CRM Integration',
    'Custom AI Solutions',
    'Consultation'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months',
    'Just exploring'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="header-content"
          >
            <h1>Get Started Today</h1>
            <p className="header-description">
              Ready to transform your business with AI? Let's discuss your project and 
              create a custom solution that drives real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="card contact-info-card"
              >
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="contact-details">{info.details}</div>
                <p className="contact-description">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2>Tell Us About Your Project</h2>
                <p className="form-description">
                  Fill out this form and we'll get back to you within 24 hours with a 
                  custom proposal tailored to your needs.
                </p>

                {isSubmitted ? (
                  <div className="success-message">
                    <CheckCircle size={48} />
                    <h3>Message Sent Successfully!</h3>
                    <p>{submitMessage}</p>
                  </div>
                ) : (
                  <>
                    {submitError && (
                      <div className="error-message">
                        <p>{submitError}</p>
                      </div>
                    )}
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="service">Service Needed *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="budget">Budget Range</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeline">Project Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">When do you need this completed?</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Description *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary submit-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="loading-spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                  </>
                )}
              </motion.div>
            </div>

            <div className="contact-sidebar">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="sidebar-content"
              >
                <div className="sidebar-section">
                  <h3>Why Choose ApexNova AI?</h3>
                  <ul className="benefits-list">
                    <li><CheckCircle size={16} /> Free initial consultation</li>
                    <li><CheckCircle size={16} /> Custom AI solutions</li>
                    <li><CheckCircle size={16} /> 24/7 ongoing support</li>
                    <li><CheckCircle size={16} /> Proven ROI results</li>
                    <li><CheckCircle size={16} /> Enterprise-grade security</li>
                  </ul>
                </div>

                <div className="sidebar-section">
                  <h3>What Happens Next?</h3>
                  <div className="process-steps">
                    <div className="process-step">
                      <div className="step-icon">
                        <Calendar size={20} />
                      </div>
                      <div className="step-content">
                        <h4>Free Consultation</h4>
                        <p>We'll schedule a 30-minute call to discuss your needs</p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-icon">
                        <Clock size={20} />
                      </div>
                      <div className="step-content">
                        <h4>Custom Proposal</h4>
                        <p>Receive a detailed proposal within 24-48 hours</p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-icon">
                        <CheckCircle size={20} />
                      </div>
                      <div className="step-content">
                        <h4>Project Kickoff</h4>
                        <p>Start building your AI solution immediately</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-section cta-section">
                  <h3>Need Immediate Help?</h3>
                  <p>Call us directly for urgent inquiries or technical support</p>
                  <a href="tel:+15551234567" className="btn btn-secondary">
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-header {
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

        .contact-info-section {
          padding: 4rem 0;
        }

        .contact-info-card {
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          color: #00D4FF;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .contact-details {
          font-size: 1.2rem;
          font-weight: 600;
          color: #00D4FF;
          margin-bottom: 0.5rem;
        }

        .contact-description {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-form-section h2 {
          margin-bottom: 1rem;
        }

        .form-description {
          color: #94a3b8;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          color: #cbd5e1;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 1rem;
          color: #e2e8f0;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00D4FF;
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #64748b;
        }

        .form-group select {
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
        }

        .form-group select option {
          background: #1a1d29;
          color: #e2e8f0;
          padding: 0.5rem;
        }

        .form-group select::-ms-expand {
          display: none;
        }

        .form-group select {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300D4FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1rem;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .submit-btn {
          width: 100%;
          padding: 1.2rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .success-message {
          text-align: center;
          padding: 3rem;
          background: rgba(0, 255, 127, 0.05);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 15px;
        }

        .success-message svg {
          color: #00FF7F;
          margin-bottom: 1.5rem;
        }

        .success-message h3 {
          color: #00FF7F;
          margin-bottom: 1rem;
        }

        .success-message p {
          color: #94a3b8;
          margin: 0;
        }

        .error-message {
          background: rgba(255, 59, 48, 0.1);
          border: 1px solid rgba(255, 59, 48, 0.3);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .error-message p {
          color: #ff3b30;
          margin: 0;
          font-weight: 500;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .sidebar-content {
          position: sticky;
          top: 2rem;
        }

        .sidebar-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .sidebar-section h3 {
          color: #00D4FF;
          margin-bottom: 1.5rem;
        }

        .benefits-list {
          list-style: none;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #cbd5e1;
        }

        .benefits-list svg {
          color: #00FF7F;
          flex-shrink: 0;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .process-step {
          display: flex;
          gap: 1rem;
          align-items: start;
        }

        .step-icon {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00D4FF;
          flex-shrink: 0;
        }

        .step-content h4 {
          color: #8A2BE2;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .step-content p {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .cta-section {
          text-align: center;
        }

        .cta-section h3 {
          margin-bottom: 1rem;
        }

        .cta-section p {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .sidebar-content {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact-header {
            padding: 6rem 0 3rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-info-section .grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .contact-info-section .grid-4 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;