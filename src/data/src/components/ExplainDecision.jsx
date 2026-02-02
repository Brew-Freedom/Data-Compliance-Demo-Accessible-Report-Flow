import { useState } from "react";

export default function ExplainDecision({ explanation }) {
  const [open, setOpen] = useState(false);

  if (!explanation) return null;

  return (
    <section className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="text-sm text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        🧠 Explain this decision
      </button>

      {open && (
        <div
          role="region"
          aria-label="AI explanation"
          className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm"
        >
          <p className="mb-2">
            <strong>What happened:</strong><br />
            {explanation.summary}
          </p>

          <p className="mb-2">
            <strong>Why this matters:</strong><br />
            {explanation.whyItMatters}
          </p>

          <p>
            <strong>What happens next:</strong><br />
            {explanation.whatHappensNext}
          </p>

          <p className="mt-3 text-xs text-gray-600">
            This explanation is generated to help non-technical users understand the review process.
          </p>
        </div>
      )}
    </section>
  );
}
