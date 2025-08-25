import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Users, Clock, TrendingUp, Award, CheckCircle } from 'lucide-react';

const HealthcarePhoneCase: React.FC = () => {
  useEffect(() => {
    document.title = 'Healthcare AI Phone System Case Study - ApexNova AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ApexNova AI transformed healthcare communications with intelligent phone systems, reducing wait times by 65% and improving patient satisfaction scores.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Healthcare AI Phone System Implementation Case Study",
      "description": "Comprehensive case study on AI-powered phone system implementation for healthcare providers, showcasing dramatic improvements in patient communication efficiency.",
      "author": {
        "@type": "Organization",
        "name": "ApexNova AI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ApexNova AI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://getapexnova.com/logo.png"
        }
      },
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://getapexnova.com/portfolio/healthcare-ai-phone-system"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text text-sm font-semibold mb-4">
              HEALTHCARE TECHNOLOGY
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI-Powered Healthcare Phone System
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionary phone communication system that transformed patient interactions, 
              reduced wait times, and improved healthcare accessibility for medical practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Industry:</span>
                <span className="ml-2 text-white">Healthcare</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Timeline:</span>
                <span className="ml-2 text-white">4 months</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Team Size:</span>
                <span className="ml-2 text-white">6 specialists</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
            <Phone size={48} className="text-green-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Key Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">65%</div>
                <div className="text-sm text-gray-400">Wait Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">40%</div>
                <div className="text-sm text-gray-400">Call Volume Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">85%</div>
                <div className="text-sm text-gray-400">Patient Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">30%</div>
                <div className="text-sm text-gray-400">Staff Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Healthcare providers were struggling with overwhelming phone volumes, long patient wait times, 
              and staff burnout from repetitive administrative calls. Critical patient communications were 
              being delayed, and appointment scheduling inefficiencies were impacting patient care quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Staff Overload</h4>
                <p className="text-sm text-gray-400">Administrative staff spending 70% of time on routine calls</p>
              </div>
              <div className="text-center">
                <Clock size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Long Wait Times</h4>
                <p className="text-sm text-gray-400">Average patient hold time exceeding 8 minutes</p>
              </div>
              <div className="text-center">
                <TrendingUp size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Missed Opportunities</h4>
                <p className="text-sm text-gray-400">25% of calls abandoned before reaching staff</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-xl font-bold mb-4">Intelligent Call Routing</h3>
              <p className="text-gray-300 mb-4">
                AI-powered system that analyzes caller intent and routes patients to the most appropriate department 
                or automated service, reducing transfer times and improving first-call resolution rates.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-2" />Natural language processing for intent recognition</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-2" />Smart queue management and priority routing</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-2" />Real-time staff availability integration</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4">Automated Patient Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive automated services for appointment scheduling, prescription refills, 
                lab result inquiries, and basic medical information, available 24/7.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Voice-activated appointment booking</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Secure patient information retrieval</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Multilingual support capabilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Implementation Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 1: System Analysis & Design</h4>
                <p className="text-gray-400">4 weeks - Current system audit, requirements gathering, and AI model design</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 2: Core Development</h4>
                <p className="text-gray-400">8 weeks - AI phone system development, integration with existing EHR systems</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 3: Testing & Training</h4>
                <p className="text-gray-400">3 weeks - Comprehensive testing, staff training, and system optimization</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 4: Deployment & Support</h4>
                <p className="text-gray-400">1 week - Live deployment with 24/7 monitoring and ongoing optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Natural Language Processing',
              'Voice Recognition AI',
              'Cloud Infrastructure',
              'EHR Integration APIs',
              'Real-time Analytics',
              'Security Compliance',
              'Call Center Software',
              'Machine Learning'
            ].map((tech, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800 text-center">
                <div className="text-sm text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
          <div className="flex items-start gap-6">
            <Award size={48} className="text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "The AI phone system has been a game-changer for our practice. Patient satisfaction scores have 
                never been higher, and our staff can now focus on providing quality care instead of managing 
                endless phone queues. The system handles routine inquiries flawlessly and seamlessly escalates 
                complex cases to the right personnel."
              </blockquote>
              <cite className="text-green-400 font-semibold">
                — Dr. Sarah Chen, Regional Medical Director
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcarePhoneCase;