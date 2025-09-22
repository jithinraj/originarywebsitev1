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
    <>
      {/* Spacer to prevent content from being hidden behind banner */}
      <div className="h-14" aria-hidden="true" />

      <div
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-3 z-50"
        role="region"
        aria-label="Privacy consent"
        aria-live="polite"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-start sm:items-center flex-1">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-900 mr-2">Privacy</span>
              We use analytics to improve our site. No personal data collected.
              <button
                onClick={clearConsent}
                className="text-gray-900 underline underline-offset-2 hover:no-underline ml-1"
                aria-label="Learn more"
              >
                Learn more
              </button>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReject}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Decline"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded transition-colors"
              aria-label="Accept"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}