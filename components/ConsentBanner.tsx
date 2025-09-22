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
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-black/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl border border-zinc-800 z-50"
      role="region"
      aria-label="Privacy consent"
      aria-live="polite"
    >
      <button
        onClick={handleReject}
        className="absolute top-3 right-3 text-zinc-400 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>

      <p className="text-sm mb-3 pr-6">
        We use analytics to understand how developers use our tools.
        No personal data is collected.
      </p>

      <div className="flex gap-2">
        <button
          onClick={handleReject}
          className="flex-1 px-3 py-1.5 text-xs border border-zinc-700 rounded hover:bg-zinc-900 transition-colors"
          aria-label="Reject analytics tracking"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 px-3 py-1.5 text-xs bg-white text-black rounded hover:bg-zinc-200 transition-colors font-medium"
          aria-label="Accept analytics tracking"
        >
          Accept
        </button>
      </div>

      <button
        onClick={clearConsent}
        className="mt-2 text-xs text-zinc-500 hover:text-zinc-300 underline w-full text-center"
        aria-label="Reset privacy choices"
      >
        Privacy choices
      </button>
    </div>
  );
}