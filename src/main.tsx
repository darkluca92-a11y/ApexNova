import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error boundary and safer mounting
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found! Check if index.html has <div id="root"></div>');
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('React app mounted successfully');
  } catch (error) {
    console.error('Failed to mount React app:', error);
    // Fallback content
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; font-family: Arial;">
        <h1>Loading Error</h1>
        <p>The application failed to load. Please refresh the page.</p>
        <button onclick="window.location.reload()">Refresh Page</button>
      </div>
    `;
  }
}
