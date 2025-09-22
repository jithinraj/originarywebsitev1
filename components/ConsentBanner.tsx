"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CONSENT_KEY = "originary:consent:v1";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (navigator.doNotTrack === "1") {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: false }));
      return;
    }

    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setShow(true);
      // Add padding to body to prevent content overlap
      document.body.style.paddingBottom = '48px';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.paddingBottom = '';
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: true }));
    setShow(false);
    document.body.style.paddingBottom = '';
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: false }));
    setShow(false);
    document.body.style.paddingBottom = '';
  };

  const clearConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50"
      role="region"
      aria-label="Privacy consent"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            We use cookies to improve your experience.
          </span>
          <button
            onClick={clearConsent}
            className="text-sm text-gray-900 underline hover:no-underline"
            aria-label="Learn more"
          >
            Learn more
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReject}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Decline"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded transition-colors"
            aria-label="Accept"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}