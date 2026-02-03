export default function CsvPreview({ rows }) {
  return (
    <>
      <h2 style={{ marginTop: "3rem" }}>CSV Export Preview</h2>
      <p>This is a simulated export for demonstration purposes.</p>

      <pre className="csv-box">
id,date,dataset,issue,status,confidence,sent_to_legal
{rows.map(r =>
  `${r.id},"${r.date}","${r.dataset}","${r.issue}","${r.status}",${r.confidence},${r.sentToLegal}`
).join("\n")}
      </pre>
    </>
  );
}
