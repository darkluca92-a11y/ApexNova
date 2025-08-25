import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Users, Clock, TrendingUp, Award, CheckCircle, Zap } from 'lucide-react';

const AIChatbotCase: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Customer Support Chatbot Case Study - ApexNova AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how ApexNova AI revolutionized customer support with intelligent chatbots, reducing response time by 85% and increasing customer satisfaction to 94%.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI Customer Support Chatbot Implementation Case Study",
      "description": "Comprehensive case study on AI-powered chatbot implementation for customer support, showcasing dramatic improvements in response times and customer satisfaction.",
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
      "datePublished": "2024-12-15",
      "dateModified": "2024-12-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://getapexnova.com/portfolio/ai-customer-support-chatbot"
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-sm font-semibold mb-4">
              SAAS TECHNOLOGY
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI Customer Support Chatbot
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Intelligent chatbot solution that transformed customer support operations, 
              dramatically reducing response times and improving customer satisfaction through 
              advanced natural language processing and seamless human handoff capabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Industry:</span>
                <span className="ml-2 text-white">SaaS Technology</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Timeline:</span>
                <span className="ml-2 text-white">3 months</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Team Size:</span>
                <span className="ml-2 text-white">4 specialists</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
            <MessageSquare size={48} className="text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Key Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">85%</div>
                <div className="text-sm text-gray-400">Faster Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">65%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">94%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">78%</div>
                <div className="text-sm text-gray-400">Automation Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Customer Support Challenge</h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A fast-growing SaaS company was overwhelmed with customer support inquiries, 
              leading to long response times, decreased customer satisfaction, and burnout among 
              support staff. Manual ticket routing and repetitive inquiries were consuming valuable resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Slow Response Times</h4>
                <p className="text-sm text-gray-400">Average response time of 4 hours causing customer frustration</p>
              </div>
              <div className="text-center">
                <Users size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Staff Overload</h4>
                <p className="text-sm text-gray-400">Support team overwhelmed with repetitive routine inquiries</p>
              </div>
              <div className="text-center">
                <TrendingUp size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Scaling Issues</h4>
                <p className="text-sm text-gray-400">Unable to scale support operations with growing user base</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our AI-Powered Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20">
              <Zap size={32} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Intelligent NLP Processing</h3>
              <p className="text-gray-300 mb-4">
                Advanced natural language processing system that understands customer intent, 
                context, and sentiment to provide accurate, personalized responses in real-time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Intent recognition and classification</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Sentiment analysis and response adaptation</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Multi-language support capabilities</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
              <MessageSquare size={32} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Seamless Human Handoff</h3>
              <p className="text-gray-300 mb-4">
                Smart escalation system that identifies when human intervention is needed, 
                providing context and conversation history for smooth agent transitions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Automated escalation triggers</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Context preservation across handoffs</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Agent workload optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-xl font-bold mb-4">Knowledge Base Integration</h3>
            <p className="text-gray-300 mb-4">
              Dynamic integration with company knowledge base, product documentation, and FAQ systems 
              for accurate, up-to-date information delivery with continuous learning capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">5,000+</div>
                <div className="text-sm text-gray-400">Knowledge Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Real-time</div>
                <div className="text-sm text-gray-400">Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-sm text-gray-400">Integrations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Implementation Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-blue-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 1: Discovery & Analysis</h4>
                <p className="text-gray-400">2 weeks - Support ticket analysis, pattern identification, and customer journey mapping</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 2: AI Model Development</h4>
                <p className="text-gray-400">6 weeks - NLP model training, intent recognition development, and knowledge base integration</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 3: Integration & Testing</h4>
                <p className="text-gray-400">3 weeks - System integration, extensive testing, and response refinement</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 4: Launch & Optimization</h4>
                <p className="text-gray-400">1 week - Gradual rollout with continuous monitoring and performance optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Natural Language Processing',
              'Machine Learning',
              'Knowledge Graph',
              'API Integration',
              'Real-time Analytics',
              'Cloud Infrastructure',
              'Conversational AI',
              'Sentiment Analysis'
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-4 rounded-lg border border-blue-500/20 text-center">
                <div className="text-sm text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
          <div className="flex items-start gap-6">
            <Award size={48} className="text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Client Success Story</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "The AI chatbot transformed our support workflow completely. Response times dropped from 4 hours 
                to 45 minutes, and our team can now focus on complex issues while the bot handles routine inquiries 
                flawlessly. Customer satisfaction scores jumped to 94% - it's like having a perfect support agent 
                that never sleeps."
              </blockquote>
              <cite className="text-blue-400 font-semibold">
                — Sarah Chen, Head of Customer Success
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbotCase;