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
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: true }));
    setShow(false);
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: false }));
    setShow(false);
  };

  const clearConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 z-50"
      role="region"
      aria-label="Privacy consent"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-1">
          <span className="text-sm font-medium text-gray-900 mr-2">Privacy & Cookies</span>
          <button
            onClick={handleReject}
            className="text-gray-400 hover:text-gray-600 transition-colors mr-3"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm text-gray-600">
            We use analytics to understand how you use our site and improve your experience. No personal data is collected.
            <button
              onClick={clearConsent}
              className="text-gray-900 underline underline-offset-2 hover:no-underline ml-1"
              aria-label="Learn more about privacy"
            >
              Learn more
            </button>
          </p>
        </div>

        <div className="flex items-center gap-3 ml-8">
          <button
            onClick={handleReject}
            className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Decline analytics tracking"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded transition-colors"
            aria-label="Accept analytics tracking"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}