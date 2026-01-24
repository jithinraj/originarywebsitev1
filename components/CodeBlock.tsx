"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyToClipboard } from "@/lib/clipboard";

interface CodeTab {
  label: string;
  lang: string;
  code: string;
}

interface CodeBlockProps {
  code?: string;
  lang?: string;
  className?: string;
  tabs?: CodeTab[];
}

export default function CodeBlock({ code, lang = "bash", className = "", tabs }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const currentCode = tabs ? tabs[activeTab].code : code || "";
  const currentLang = tabs ? tabs[activeTab].lang : lang;

  async function onCopy() {
    const success = await copyToClipboard(currentCode);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className={`code-block ${className}`}>
      <div className="code-header">
        {tabs && tabs.length > 1 ? (
          <div className="code-tabs">
            {tabs.map((tab, idx) => (
              <button
                type="button"
                key={tab.label}
                className={`code-tab ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : (
          <span className="code-lang">{currentLang}</span>
        )}
        <button
          type="button"
          onClick={onCopy}
          className={`copy-btn ${copied ? 'copied' : ''}`}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="code-content">
        <pre>
          <code className={`language-${currentLang}`}>{currentCode}</code>
        </pre>
      </div>

      <style jsx>{`
        .code-block {
          position: relative;
          border-radius: 12px;
          border: 1px solid var(--border-default);
          background: var(--surface-code, #0a0a0a);
          overflow: hidden;
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: var(--surface-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .code-tabs {
          display: flex;
          gap: 4px;
        }

        .code-tab {
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .code-tab:hover {
          color: var(--text-secondary);
          background: var(--surface-elevated);
        }

        .code-tab.active {
          color: var(--text-primary);
          background: var(--surface-elevated);
        }

        .code-lang {
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: 1px solid var(--border-default);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .copy-btn:hover {
          color: var(--text-secondary);
          border-color: var(--border-hover);
          background: var(--surface-elevated);
        }

        .copy-btn.copied {
          color: #22c55e;
          border-color: rgba(34, 197, 94, 0.3);
          background: rgba(34, 197, 94, 0.1);
        }

        .code-content {
          padding: 16px;
          overflow-x: auto;
        }

        .code-content pre {
          margin: 0;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.6;
        }

        .code-content code {
          color: var(--text-code, #e4e4e7);
        }

        @media (max-width: 480px) {
          .code-header {
            padding: 6px 10px;
          }

          .code-tabs {
            gap: 2px;
          }

          .code-tab {
            padding: 3px 8px;
            font-size: 11px;
          }

          .copy-btn span {
            display: none;
          }

          .copy-btn {
            padding: 4px 8px;
          }

          .code-content {
            padding: 12px;
          }

          .code-content pre {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}
