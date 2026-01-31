let lastReportAt = 0;
const COOLDOWN_MS = 60_000;

async function reportError(payload) {
  const now = Date.now();
  if (now - lastReportAt < COOLDOWN_MS) return;
  lastReportAt = now;

  try {
    await fetch('/api/report-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Avoid loops if reporting fails
  }
}

export function initCrashMonitor() {
  window.addEventListener('error', (event) => {
    reportError({
      type: 'JavaScript Error',
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportError({
      type: 'Unhandled Promise Rejection',
      message: event.reason?.toString() || 'Unknown reason',
      stack: event.reason?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    });
  });
}
