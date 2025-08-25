import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Users, TrendingUp, Globe, Award, CheckCircle, Zap } from 'lucide-react';

const EcommerceOptimizationCase: React.FC = () => {
  useEffect(() => {
    document.title = 'E-commerce Platform Enhancement Case Study - ApexNova AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ApexNova AI transformed e-commerce operations with AI-powered optimization, achieving 127% conversion rate increase and 73% faster page load speeds.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "E-commerce Platform Enhancement Case Study",
      "description": "Comprehensive case study on AI-powered e-commerce optimization achieving significant improvements in conversion rates, page performance, and organic traffic growth.",
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
      "datePublished": "2024-11-30",
      "dateModified": "2024-11-30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://getapexnova.com/portfolio/ecommerce-platform-enhancement"
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
              E-COMMERCE RETAIL
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              E-commerce Platform Enhancement
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Complete e-commerce transformation using AI-powered optimization, 
              advanced analytics, and performance enhancement to dramatically improve 
              conversion rates, user experience, and organic traffic growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Industry:</span>
                <span className="ml-2 text-white">E-commerce Retail</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Timeline:</span>
                <span className="ml-2 text-white">4 months</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Revenue:</span>
                <span className="ml-2 text-white">$2M+ annually</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
            <ShoppingCart size={48} className="text-green-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Performance Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">127%</div>
                <div className="text-sm text-gray-400">Conversion Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">73%</div>
                <div className="text-sm text-gray-400">Faster Page Load</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">156%</div>
                <div className="text-sm text-gray-400">Organic Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">89%</div>
                <div className="text-sm text-gray-400">Customer Retention</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">E-commerce Challenges</h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The e-commerce platform struggled with poor conversion rates, slow page load times, 
              and declining organic traffic. Cart abandonment rates were high, user experience was 
              suboptimal, and the site wasn't effectively capturing and converting visitor intent.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Low Conversion Rates</h4>
                <p className="text-sm text-gray-400">Only 1.2% of visitors converting to customers</p>
              </div>
              <div className="text-center">
                <Zap size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Performance Issues</h4>
                <p className="text-sm text-gray-400">Slow 8-second average page load times</p>
              </div>
              <div className="text-center">
                <Globe size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Poor SEO Ranking</h4>
                <p className="text-sm text-gray-400">Declining organic search visibility and traffic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our AI-Driven Transformation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 p-8 rounded-2xl border border-green-500/20">
              <TrendingUp size={32} className="text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">AI-Powered Conversion Optimization</h3>
              <p className="text-gray-300 mb-4">
                Advanced machine learning algorithms analyze user behavior, optimize product recommendations, 
                and personalize the shopping experience to maximize conversion rates.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-2" />Behavioral pattern analysis</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-2" />Dynamic pricing optimization</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-2" />Personalized product recommendations</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20">
              <Zap size={32} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Performance Enhancement</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive performance optimization including image compression, code splitting, 
                CDN implementation, and advanced caching strategies for lightning-fast load times.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Advanced image optimization</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Code splitting and lazy loading</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Global CDN implementation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">SEO & Traffic Optimization</h3>
            <p className="text-gray-300 mb-4">
              Data-driven SEO strategy with AI-powered content optimization, technical SEO improvements, 
              and strategic link building to dramatically increase organic search visibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">2,500+</div>
                <div className="text-sm text-gray-400">Keywords Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400 mb-2">95+</div>
                <div className="text-sm text-gray-400">Page Speed Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-sm text-gray-400">Core Web Vitals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400 mb-2">300%</div>
                <div className="text-sm text-gray-400">Organic Growth</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Implementation Process</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 1: Analysis & Strategy</h4>
                <p className="text-gray-400">3 weeks - Platform audit, competitor analysis, and optimization strategy development</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 2: Performance Optimization</h4>
                <p className="text-gray-400">6 weeks - Technical improvements, speed optimization, and infrastructure enhancement</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 3: Conversion Enhancement</h4>
                <p className="text-gray-400">4 weeks - AI implementation, UX improvements, and conversion rate optimization</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Phase 4: SEO & Launch</h4>
                <p className="text-gray-400">3 weeks - SEO optimization, content strategy, and performance monitoring</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features Implemented</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Smart Recommendations', desc: 'AI-powered product suggestions based on user behavior' },
              { title: 'Dynamic Pricing', desc: 'Real-time price optimization for maximum conversion' },
              { title: 'Advanced Search', desc: 'Intelligent search with autocomplete and filtering' },
              { title: 'Performance Monitoring', desc: 'Real-time analytics and performance tracking' },
              { title: 'Mobile Optimization', desc: 'Responsive design optimized for all devices' },
              { title: 'SEO Enhancement', desc: 'Technical SEO and content optimization strategies' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Machine Learning',
              'React & Next.js',
              'Performance Optimization',
              'SEO Analytics',
              'CDN & Caching',
              'A/B Testing',
              'Conversion Tracking',
              'User Behavior Analytics'
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-sm text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
          <div className="flex items-start gap-6">
            <Award size={48} className="text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Business Transformation</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "The platform optimization exceeded all our expectations. Our conversion rate more than doubled, 
                page load times are incredibly fast, and organic traffic has grown beyond what we thought possible. 
                The AI-powered recommendations alone have revolutionized how customers discover and purchase our products. 
                This transformation has fundamentally changed our business trajectory."
              </blockquote>
              <cite className="text-green-400 font-semibold">
                — Marcus Thompson, CEO & Co-founder
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceOptimizationCase;