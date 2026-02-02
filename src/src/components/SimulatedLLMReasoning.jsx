import { useState } from "react";
import { useTypingEffect } from "./useTypingEffect";

export default function SimulatedLLMReasoning({ reasoning }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("exec");

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reasoning) return null;

  function exportCSV() {
    const rows = reasoning.map(r =>
      `"Step ${r.step}","${r.confidence}","${r.policyRef}","${r.execText}"`
    );
    const blob = new Blob(
      ["Step,Confidence,Policy Reference,Explanation\n" + rows.join("\n")],
      { type: "text/csv" }
    );
    download(blob, "ai_reasoning_demo.csv");
  }

  function exportPDF() {
    const content = reasoning
      .map(r => `Step ${r.step}\n${r.execText}\n\n`)
      .join("");
    const blob = new Blob([content], { type: "application/pdf" });
    download(blob, "ai_reasoning_demo.pdf");
  }

  function download(blob, filename) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  }

  return (
    <section className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-purple-700 underline"
      >
        🤖 Explain this decision
      </button>

      {open && (
        <div className="mt-3 bg-purple-50 border rounded-lg p-4">
          {/* Toggle */}
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-2">
              <button
                onClick={() => setView("exec")}
                className={view === "exec" ? "font-bold underline" : ""}
              >
                Exec view
              </button>
              <button
                onClick={() => setView("legal")}
                className={view === "legal" ? "font-bold underline" : ""}
              >
                Legal view
              </button>
            </div>

            <div className="space-x-2">
              <button onClick={exportCSV}>Export CSV</button>
              <button onClick={exportPDF}>Export PDF</button>
            </div>
          </div>

          <ol className="space-y-4 text-sm">
            {reasoning.map(step => {
              const text =
                view === "exec" ? step.execText : step.legalText;

              const typedText = useTypingEffect(
                text,
                !prefersReducedMotion
              );

              return (
                <li key={step.step} className="bg-white p-3 rounded-md">
                  <div className="flex justify-between">
                    <strong>Step {step.step}</strong>
                    <ConfidenceBadge level={step.confidence} />
                  </div>

                  <p className="mt-2">{typedText}</p>

                  <button className="text-xs text-blue-600 mt-2 underline">
                    📄 {step.policyRef}
                  </button>
                </li>
              );
            })}
          </ol>

          <p className="text-xs text-gray-600 mt-4">
            This explanation simulates how an AI assistant might reason.
            Final decisions are always made by humans.
          </p>
        </div>
      )}
    </section>
  );
}

function ConfidenceBadge({ level }) {
  const colors = {
    High: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800"
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded ${colors[level]}`}
    >
      Confidence: {level}
    </span>
  );
}
