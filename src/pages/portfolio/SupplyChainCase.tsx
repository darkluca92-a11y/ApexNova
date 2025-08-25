import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, BarChart3, Clock, TrendingUp, Award, CheckCircle, Package } from 'lucide-react';

const SupplyChainCase: React.FC = () => {
  useEffect(() => {
    document.title = 'Supply Chain AI Optimization Case Study - ApexNova AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ApexNova AI revolutionized supply chain management with predictive analytics, reducing costs by 35% and improving delivery efficiency by 50%.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI-Powered Supply Chain Optimization Case Study",
      "description": "Comprehensive case study demonstrating how artificial intelligence transformed supply chain operations, delivering significant cost savings and operational improvements.",
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
      "datePublished": "2024-10-20",
      "dateModified": "2024-10-20",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://getapexnova.com/portfolio/supply-chain-ai-optimization"
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text text-sm font-semibold mb-4">
              SUPPLY CHAIN & LOGISTICS
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI-Driven Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive supply chain transformation using predictive analytics, 
              demand forecasting, and intelligent logistics optimization to reduce costs 
              and dramatically improve operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Industry:</span>
                <span className="ml-2 text-white">Manufacturing</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Timeline:</span>
                <span className="ml-2 text-white">4 months</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Scale:</span>
                <span className="ml-2 text-white">Global Operations</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20">
            <Package size={48} className="text-orange-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Business Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">35%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">50%</div>
                <div className="text-sm text-gray-400">Delivery Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">28%</div>
                <div className="text-sm text-gray-400">Inventory Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">95%</div>
                <div className="text-sm text-gray-400">Forecast Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Supply Chain Challenges</h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The manufacturing company faced significant supply chain inefficiencies including 
              unpredictable demand fluctuations, excessive inventory costs, delayed shipments, 
              and poor visibility across their global network of suppliers and distribution centers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Truck size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Logistics Inefficiency</h4>
                <p className="text-sm text-gray-400">Suboptimal routing and scheduling leading to delayed deliveries</p>
              </div>
              <div className="text-center">
                <BarChart3 size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Demand Volatility</h4>
                <p className="text-sm text-gray-400">Inability to accurately predict customer demand patterns</p>
              </div>
              <div className="text-center">
                <Package size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Excess Inventory</h4>
                <p className="text-sm text-gray-400">Overstocking leading to increased carrying costs and waste</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our AI-Powered Transformation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 p-8 rounded-2xl border border-orange-500/20">
              <BarChart3 size={32} className="text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Predictive Demand Forecasting</h3>
              <p className="text-gray-300 mb-4">
                Advanced machine learning algorithms analyze historical data, market trends, 
                seasonal patterns, and external factors to provide highly accurate demand predictions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-orange-400 mr-2" />Multi-variable trend analysis</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-orange-400 mr-2" />Real-time market data integration</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-orange-400 mr-2" />Seasonal pattern recognition</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 p-8 rounded-2xl border border-red-500/20">
              <Truck size={32} className="text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Intelligent Route Optimization</h3>
              <p className="text-gray-300 mb-4">
                AI-powered logistics system that optimizes delivery routes, schedules, and resource 
                allocation while considering traffic patterns, weather conditions, and delivery priorities.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-red-400 mr-2" />Dynamic route adjustment</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-red-400 mr-2" />Real-time traffic integration</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-red-400 mr-2" />Fuel efficiency optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-xl font-bold mb-4">Smart Inventory Management</h3>
            <p className="text-gray-300 mb-4">
              Automated inventory control system that maintains optimal stock levels, prevents stockouts, 
              and minimizes carrying costs through intelligent reorder points and safety stock calculations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-sm text-gray-400">SKUs Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">99.2%</div>
                <div className="text-sm text-gray-400">Availability Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">15</div>
                <div className="text-sm text-gray-400">Global Warehouses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Real-time</div>
                <div className="text-sm text-gray-400">Stock Updates</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Implementation Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-orange-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Discovery & Data Integration</h4>
                <p className="text-gray-400">4 weeks - Supply chain audit, data source identification, and integration planning</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">AI Model Development</h4>
                <p className="text-gray-400">8 weeks - Machine learning model creation, training, and validation</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">System Integration & Testing</h4>
                <p className="text-gray-400">3 weeks - ERP integration, user interface development, and comprehensive testing</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Deployment & Optimization</h4>
                <p className="text-gray-400">1 week - Global rollout, team training, and continuous performance optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Risk Assessment', desc: 'Supplier risk evaluation and contingency planning' },
              { title: 'Cost Optimization', desc: 'Total cost of ownership analysis and reduction strategies' },
              { title: 'Quality Control', desc: 'Predictive quality metrics and defect prevention' },
              { title: 'Sustainability Tracking', desc: 'Carbon footprint monitoring and green logistics' },
              { title: 'Real-time Visibility', desc: 'End-to-end supply chain transparency and tracking' },
              { title: 'Automated Procurement', desc: 'Intelligent supplier selection and purchase optimization' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
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
              'Machine Learning',
              'Predictive Analytics',
              'IoT Integration',
              'Cloud Computing',
              'Big Data Processing',
              'Real-time Monitoring',
              'API Connectivity',
              'Business Intelligence'
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-4 rounded-lg border border-orange-500/20 text-center">
                <div className="text-sm text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20">
          <div className="flex items-start gap-6">
            <Award size={48} className="text-orange-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Transformation Results</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "The AI-powered supply chain optimization has been revolutionary for our operations. 
                We've achieved cost savings we never thought possible while significantly improving 
                our service levels. The predictive capabilities have transformed how we manage inventory 
                and plan production. This solution has given us a competitive advantage in the market."
              </blockquote>
              <cite className="text-orange-400 font-semibold">
                — Jennifer Walsh, VP of Supply Chain Operations
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainCase;