// Demo component – simulated data
export default function AIExplanation({ row }) {
  return (
    <div className="ai-box">
      <strong>AI explanation (simulated)</strong>

      <p>
        This data was flagged due to potential exposure of personal
        identifiers within user-generated content.
      </p>

      <p>
        Based on sampling and metadata review, the likelihood of
        restricted content is <strong>{row.confidence}</strong>.
      </p>

      <p>
        Recommended action:
        {row.confidence === "High"
          ? " Approved for use with standard safeguards."
          : " Requires human review before use."}
      </p>

      <details>
        <summary>Show policy reference</summary>
        <p>
          Internal Policy §4.2 — Handling User-Generated Content
        </p>
      </details>
    </div>
  );
}
