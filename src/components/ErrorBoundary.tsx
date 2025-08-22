import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0a0f1c',
          color: '#e2e8f0',
          fontFamily: 'Inter, sans-serif'
        }}>
          <div style={{
            maxWidth: '600px',
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h1 style={{ color: '#00D4FF', marginBottom: '1rem' }}>
              Oops! Something went wrong
            </h1>
            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>
              We're sorry for the inconvenience. The application encountered an error.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#00D4FF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginRight: '1rem'
                }}
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#00D4FF',
                  border: '1px solid #00D4FF',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Go Home
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details style={{ textAlign: 'left', marginTop: '1rem' }}>
                <summary style={{ cursor: 'pointer', color: '#8A2BE2' }}>
                  Technical Details (Development Only)
                </summary>
                <pre style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  overflow: 'auto',
                  color: '#cbd5e1'
                }}>
                  {this.state.error?.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;