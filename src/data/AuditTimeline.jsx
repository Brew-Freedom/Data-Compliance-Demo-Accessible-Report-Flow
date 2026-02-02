// Demo component – simulated data
import { useState } from "react";
import CsvPreview from "./CsvPreview";

const initialRows = [
  {
    id: 417,
    date: "Feb 1, 2026 · 3:42 PM",
    dataset: "Customer uploads (Q3)",
    issue: "Sensitive data",
    status: "Awaiting review",
    confidence: "Medium",
    sentToLegal: false
  },
  {
    id: 412,
    date: "Jan 31, 2026 · 11:12 AM",
    dataset: "Public forums scrape",
    issue: "Licensing unclear",
    status: "Cleared for use",
    confidence: "High",
    sentToLegal: false
  }
];

export default function AuditTimeline() {
  const [rows, setRows] = useState(initialRows);
  const [expandedRow, setExpandedRow] = useState(null);

  function sendToLegal(id) {
    setRows(rows =>
      rows.map(row =>
        row.id === id ? { ...row, sentToLegal: true } : row
      )
    );
  }

  return (
    <>
      <h1>Audit Timeline</h1>
      <p>Review history presented in a familiar spreadsheet format.</p>

      <table className="excel-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Dataset</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Confidence</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {rows.map(row => (
            <>
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.dataset}</td>
                <td>{row.issue}</td>
                <td>{row.status}</td>
                <td>{row.confidence}</td>
                <td>
                  <button
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === row.id ? null : row.id
                      )
                    }
                  >
                    Explain
                  </button>

                  {!row.sentToLegal && (
                    <button
                      style={{ marginLeft: "0.5rem" }}
                      onClick={() => sendToLegal(row.id)}
                    >
                      Send to Legal
                    </button>
                  )}

                  {row.sentToLegal && (
                    <span className="badge">Sent to Legal</span>
                  )}
                </td>
              </tr>

              {expandedRow === row.id && (
                <tr className="expanded-row">
                  <td colSpan="6">
                    <AIExplanation row={row} />
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>

      <CsvPreview rows={rows} />
    </>
  );
}
