import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/PortfolioSimple';
import Contact from './pages/Contact';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import SEOOptimization from './pages/services/SEOOptimization';
import AIChatbots from './pages/services/AIChatbots';
import AIPhoneAgents from './pages/services/AIPhoneAgents';
import CRMIntegrations from './pages/services/CRMIntegrations';
import AIAutomation from './pages/services/AIAutomation';
import TechCorpChatbot from './pages/portfolio/TechCorpChatbot.tsx';
import RetailMaxEcommerce from './pages/portfolio/RetailMaxEcommerce.tsx';
import MedPracticePhone from './pages/portfolio/MedPracticePhone.tsx';
import FinanceFlowCRM from './pages/portfolio/FinanceFlowCRM.tsx';
import EduTechLearning from './pages/portfolio/EduTechLearning.tsx';
import LogiFlowSupplyChain from './pages/portfolio/LogiFlowSupplyChain.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  // Add error boundary for development debugging
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Global error caught:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0a0f1c',
        color: '#e2e8f0'
      }}>
        <h1>Something went wrong</h1>
        <p>The application encountered an error. Please refresh the page.</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#00D4FF',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <Router basename="/">
      <ErrorBoundary>
        <div className="App">
          <ParticleBackground />
          <ScrollToTop />
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/seo-optimization" element={<SEOOptimization />} />
              <Route path="/services/ai-chatbots" element={<AIChatbots />} />
              <Route path="/services/ai-phone-agents" element={<AIPhoneAgents />} />
              <Route path="/services/crm-integrations" element={<CRMIntegrations />} />
              <Route path="/services/ai-automation" element={<AIAutomation />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/techcorp-ai-chatbot-implementation" element={<TechCorpChatbot />} />
              <Route path="/portfolio/retailmax-e-commerce-optimization" element={<RetailMaxEcommerce />} />
              <Route path="/portfolio/medpractice-ai-phone-system" element={<MedPracticePhone />} />
              <Route path="/portfolio/financeflow-crm-integration" element={<FinanceFlowCRM />} />
              <Route path="/portfolio/edutech-learning-platform" element={<EduTechLearning />} />
              <Route path="/portfolio/logiflow-supply-chain-ai" element={<LogiFlowSupplyChain />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* Catch-all route for debugging */}
              <Route path="*" element={
                <div style={{ padding: '2rem', textAlign: 'center', color: '#e2e8f0' }}>
                  <h2>Page Not Found</h2>
                  <p>The requested page doesn't exist.</p>
                  <a href="/" style={{ color: '#00D4FF' }}>Go to Homepage</a>
                </div>
              } />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;