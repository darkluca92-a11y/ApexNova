import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Users, BookOpen, TrendingUp, Award, CheckCircle, Brain } from 'lucide-react';

const EducationalPlatformCase: React.FC = () => {
  useEffect(() => {
    document.title = 'Educational Learning Platform Case Study - ApexNova AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how ApexNova AI revolutionized online education with personalized learning platforms, increasing student engagement by 78% and improving completion rates.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI-Powered Educational Learning Platform Case Study",
      "description": "Comprehensive case study on implementing intelligent learning platforms that adapt to individual student needs and dramatically improve educational outcomes.",
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
      "datePublished": "2024-11-15",
      "dateModified": "2024-11-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://getapexnova.com/portfolio/educational-learning-platform"
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
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text text-sm font-semibold mb-4">
              EDUCATION TECHNOLOGY
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Personalized AI Learning Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Next-generation educational platform that adapts to individual learning styles, 
              provides real-time feedback, and dramatically improves student outcomes through 
              intelligent content delivery and assessment.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Industry:</span>
                <span className="ml-2 text-white">Education</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Timeline:</span>
                <span className="ml-2 text-white">6 months</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Students:</span>
                <span className="ml-2 text-white">15,000+</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/20">
            <GraduationCap size={48} className="text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Impact Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">78%</div>
                <div className="text-sm text-gray-400">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">65%</div>
                <div className="text-sm text-gray-400">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">45%</div>
                <div className="text-sm text-gray-400">Faster Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">92%</div>
                <div className="text-sm text-gray-400">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Educational Challenge</h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Traditional online learning platforms suffered from one-size-fits-all approaches, 
              leading to high dropout rates and poor learning outcomes. Students struggled with 
              generic content that didn't match their learning pace or preferred learning styles, 
              resulting in decreased motivation and academic performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <BookOpen size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Generic Content</h4>
                <p className="text-sm text-gray-400">Static learning materials failing to adapt to individual needs</p>
              </div>
              <div className="text-center">
                <Users size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">High Dropout Rates</h4>
                <p className="text-sm text-gray-400">60% of students abandoning courses before completion</p>
              </div>
              <div className="text-center">
                <TrendingUp size={32} className="text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Poor Engagement</h4>
                <p className="text-sm text-gray-400">Limited interaction and feedback mechanisms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our AI-Powered Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
              <Brain size={32} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Adaptive Learning Engine</h3>
              <p className="text-gray-300 mb-4">
                AI system that analyzes student performance, learning patterns, and preferences 
                to dynamically adjust content difficulty, pacing, and delivery methods in real-time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Real-time difficulty adjustment</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Learning style recognition</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-purple-400 mr-2" />Personalized content pathways</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20">
              <GraduationCap size={32} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Intelligent Assessment</h3>
              <p className="text-gray-300 mb-4">
                Continuous assessment system that evaluates understanding through various formats, 
                provides instant feedback, and identifies knowledge gaps before they become problems.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Continuous progress monitoring</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Instant feedback delivery</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-blue-400 mr-2" />Predictive performance analytics</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-xl font-bold mb-4">Smart Content Recommendation</h3>
            <p className="text-gray-300 mb-4">
              Advanced recommendation engine that suggests supplementary materials, practice exercises, 
              and learning resources based on individual progress and identified areas for improvement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">10,000+</div>
                <div className="text-sm text-gray-400">Learning Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">15</div>
                <div className="text-sm text-gray-400">Learning Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Development Process</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-purple-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Research & Analysis</h4>
                <p className="text-gray-400">6 weeks - Learning behavior analysis, pedagogical research, and AI model design</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Platform Development</h4>
                <p className="text-gray-400">12 weeks - AI engine development, user interface design, and content management system</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Testing & Optimization</h4>
                <p className="text-gray-400">4 weeks - Beta testing with focus groups, AI model refinement, and performance optimization</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-600 w-4 h-4 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold">Launch & Scale</h4>
                <p className="text-gray-400">2 weeks - Full platform deployment, instructor training, and continuous monitoring</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Adaptive Quizzes', desc: 'Dynamic difficulty adjustment based on performance' },
              { title: 'Learning Analytics', desc: 'Comprehensive progress tracking and insights' },
              { title: 'Peer Collaboration', desc: 'AI-matched study groups and discussion forums' },
              { title: 'Mobile Learning', desc: 'Seamless experience across all devices' },
              { title: 'Gamification', desc: 'Achievement systems and progress rewards' },
              { title: 'Multi-language Support', desc: 'Content available in 12 languages' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Implementation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Machine Learning',
              'Natural Language Processing',
              'React & Node.js',
              'Cloud Computing',
              'Learning Analytics',
              'Data Visualization',
              'Mobile Development',
              'API Integration'
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-4 rounded-lg border border-purple-500/20 text-center">
                <div className="text-sm text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/20">
          <div className="flex items-start gap-6">
            <Award size={48} className="text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Client Success Story</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "This platform has completely transformed how our students learn. The personalized approach 
                means each student gets exactly what they need, when they need it. We've seen remarkable 
                improvements in both engagement and academic performance. The AI recommendations are incredibly 
                accurate, and students love the adaptive learning experience."
              </blockquote>
              <cite className="text-purple-400 font-semibold">
                — Prof. Michael Rodriguez, Head of Digital Learning
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalPlatformCase;