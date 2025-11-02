"use client";
import { useState } from "react";

export default function CodeBlock({ code, lang="bash", className="" }:{
  code: string;
  lang?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(()=>setCopied(false), 1500);
  }

  return (
    <div className={`relative rounded-2xl border p-3 bg-black/90 text-white ${className}`}>
      <button
        onClick={onCopy}
        className="absolute right-3 top-3 text-xs rounded px-2 py-1 bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Copy code to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto text-sm pr-16">
        <code className={`language-${lang}`}>{code}</code>
      </pre>
    </div>
  );
}
