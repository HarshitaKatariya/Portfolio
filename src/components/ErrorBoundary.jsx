import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    fetch('/api/report-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'React Error Boundary',
        message: error.toString(),
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>We’ve been notified.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
