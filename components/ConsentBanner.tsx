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
      className="fixed bottom-0 left-0 right-0 bg-[#FAF8F1] border-t border-gray-200 p-4 shadow-lg z-50"
      role="region"
      aria-label="Privacy consent"
      aria-live="polite"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700 text-center sm:text-left">
            We use minimal analytics to improve our developer tools. No personal data collected.
            <button
              onClick={clearConsent}
              className="ml-2 text-sm text-gray-500 hover:text-gray-700 underline"
              aria-label="Privacy policy"
            >
              Privacy policy
            </button>
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Reject analytics tracking"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              aria-label="Accept analytics tracking"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}