import { useState } from "react";

export default function SimulatedLLMReasoning({ reasoning }) {
  const [open, setOpen] = useState(false);

  if (!reasoning || reasoning.length === 0) return null;

  return (
    <section className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="text-sm text-purple-700 underline focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        🤖 How did the system reason about this?
      </button>

      {open && (
        <div
          role="region"
          aria-label="Simulated AI reasoning"
          className="mt-3 bg-purple-50 border border-purple-200 rounded-lg p-4"
        >
          <ol className="space-y-3 text-sm">
            {reasoning.map((step) => (
              <li key={step.step} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="font-semibold text-purple-700"
                >
                  {step.step}.
                </span>
                <div>
                  <p className="font-medium">{step.label}</p>
                  <p className="text-gray-700">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 text-xs text-gray-600 border-t pt-3">
            This explanation simulates how an AI assistant might reason.
            Final decisions are always made by human reviewers.
          </div>
        </div>
      )}
    </section>
  );
}
