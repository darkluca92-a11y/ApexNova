import React from 'react';
import { motion } from 'framer-motion';

const PortfolioTest: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ color: '#00D4FF', marginBottom: '2rem' }}>
            Portfolio Test Page
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem' }}>
            This is a simple test page to check if the portfolio route works.
            If you can see this, the basic routing is working.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioTest;