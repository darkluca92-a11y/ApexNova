import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Users, BarChart, TrendingUp, Award, CheckCircle, Zap } from 'lucide-react';

const FinancialCRMCase: React.FC = () => {
  useEffect(() => {
    document.title = 'Smart CRM Integration Suite Case Study - ApexNova AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ApexNova AI transformed financial services with smart CRM integration, achieving 81% process efficiency improvement and 97% data accuracy.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Smart CRM Integration Suite Case Study",
      "description": "Comprehensive case study on smart CRM integration for financial services, showcasing dramatic improvements in process efficiency, data accuracy, and revenue growth.",
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
      "datePublished": "2024-10-30",
      "dateModified": "2024-10-30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://getapexnova.com/portfolio/smart-crm-integration-suite"
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
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-sm font-semibold mb-4">
              FINANCIAL SERVICES
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Smart CRM Integration Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive CRM transformation for financial services using intelligent 
              automation, advanced analytics, and seamless integrations to streamline 
              client management and dramatically improve operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Industry:</span>
                <span className="ml-2 text-white">Financial Services</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Timeline:</span>
                <span className="ml-2 text-white">3 months</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Team Size:</span>
                <span className="ml-2 text-white">5 specialists</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-2xl border border-indigo-500/20">
            <Database size={48} className="text-indigo-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Operational Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">81%</div>
                <div className="text-sm text-gray-400">Process Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">97%</div>
                <div className="text-sm text-gray-400">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">52%</div>
                <div className="text-sm text-gray-400">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">68%</div>
                <div className="text-sm text-gray-400">Time Savings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Financial Services Challenge</h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The financial services firm struggled with disconnected systems, manual data entry, 
              and inefficient client management processes. Multiple software platforms operated in silos, 
              leading to data inconsistencies, missed opportunities, and reduced client satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Database size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Data Silos</h4>
                <p className="text-sm text-gray-400">Fragmented systems with inconsistent client information</p>
              </div>
              <div className="text-center">
                <Users size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Manual Processes</h4>
                <p className="text-sm text-gray-400">Time-consuming manual data entry and client tracking</p>
              </div>
              <div className="text-center">
                <TrendingUp size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Missed Opportunities</h4>
                <p className="text-sm text-gray-400">Lost revenue due to poor lead tracking and follow-up</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Intelligent CRM Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 p-8 rounded-2xl border border-indigo-500/20">
              <Zap size={32} className="text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Automated Workflow Integration</h3>
              <p className="text-gray-300 mb-4">
                Intelligent automation that connects all business systems, eliminates manual data entry, 
                and creates seamless workflows for client onboarding, compliance, and relationship management.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-indigo-400 mr-2" />Automated client onboarding workflows</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-indigo-400 mr-2" />Real-time compliance monitoring</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-indigo-400 mr-2" />Intelligent task prioritization</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
              <BarChart size={32} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Advanced Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive analytics platform providing real-time insights into client behavior, 
                portfolio performance, and business opportunities with predictive analytics capabilities.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Predictive client analytics</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Portfolio performance tracking</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Revenue opportunity identification</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-xl font-bold mb-4">Unified Client Management</h3>
            <p className="text-gray-300 mb-4">
              Centralized client management system that provides 360-degree client views, automated 
              communication tracking, and intelligent relationship mapping for enhanced client service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">10,000+</div>
                <div className="text-sm text-gray-400">Client Records</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">System Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Real-time</div>
                <div className="text-sm text-gray-400">Data Sync</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Implementation Roadmap</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-indigo-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 1: System Analysis & Design</h4>
                <p className="text-gray-400">3 weeks - Current system audit, integration mapping, and solution architecture design</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 2: Core Integration Development</h4>
                <p className="text-gray-400">6 weeks - API development, data migration, and workflow automation implementation</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 3: Testing & Training</h4>
                <p className="text-gray-400">2 weeks - System testing, user training, and performance optimization</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 4: Deployment & Support</h4>
                <p className="text-gray-400">1 week - Live deployment with monitoring and ongoing optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Client 360 View', desc: 'Complete client profile with interaction history and preferences' },
              { title: 'Automated Workflows', desc: 'Streamlined processes for onboarding and compliance' },
              { title: 'Predictive Analytics', desc: 'AI-powered insights for business opportunity identification' },
              { title: 'Mobile Access', desc: 'Full CRM functionality optimized for mobile devices' },
              { title: 'Compliance Tracking', desc: 'Automated regulatory compliance monitoring and reporting' },
              { title: 'Integration Hub', desc: 'Seamless connection with existing financial software' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Infrastructure</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'CRM Integration',
              'API Development',
              'Data Analytics',
              'Workflow Automation',
              'Cloud Infrastructure',
              'Security Compliance',
              'Business Intelligence',
              'Mobile Development'
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-4 rounded-lg border border-indigo-500/20 text-center">
                <div className="text-sm text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-8 rounded-2xl border border-indigo-500/20">
          <div className="flex items-start gap-6">
            <Award size={48} className="text-indigo-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Client Success Achievement</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "This CRM transformation has revolutionized how we serve our clients. The automated workflows 
                have eliminated hours of manual work daily, our data accuracy is now near perfect, and we're 
                identifying new business opportunities we never saw before. The system has become the backbone 
                of our operations and has directly contributed to our 52% revenue growth this year."
              </blockquote>
              <cite className="text-indigo-400 font-semibold">
                — Robert Martinez, Managing Director
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCRMCase;