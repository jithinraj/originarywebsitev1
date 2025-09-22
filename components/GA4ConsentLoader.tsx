"use client";
import { useEffect } from "react";

const CONSENT_KEY = "originary:consent:v1";
const GA_ID = "G-FPG3HTSN2R";

export default function GA4ConsentLoader() {
  useEffect(() => {
    let consent = null as null | { analytics?: boolean };
    try {
      consent = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    } catch {}

    if (!consent?.analytics) return;

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]){
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    gtag("js", new Date());
    gtag("config", GA_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: true
    });
  }, []);

  return null;
}