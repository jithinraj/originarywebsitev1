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
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50"
      role="region"
      aria-label="Privacy consent"
      aria-live="polite"
      style={{
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Privacy & Cookies</h3>
        <button
          onClick={handleReject}
          className="text-gray-400 hover:text-gray-600 transition-colors -mt-1"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        We use analytics to understand how you use our site and improve your experience.
        No personal data is collected.
        <button
          onClick={clearConsent}
          className="text-gray-900 underline underline-offset-2 hover:no-underline ml-1"
          aria-label="Learn more about privacy"
        >
          Learn more
        </button>
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={handleReject}
          className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Reject analytics tracking"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Accept analytics tracking"
        >
          Accept
        </button>
      </div>
    </div>
  );
}