export const auditEvents = [
  {
    id: 1,
    timestamp: "2026-02-01T14:10:00",
    title: "Potential sensitive data reported",
    dataset: "customer_uploads_q3.xlsx",
    row: 417,
    reason: "Personal or sensitive information",
    actor: "Internal user",
    status: "awaiting_review",
    steps: [
      {
        time: "2026-02-01T14:10:00",
        description: "A user flagged a potential data concern."
      },
      {
        time: "2026-02-01T15:05:00",
        description: "Compliance team began reviewing the report."
      },
      {
        time: "2026-02-01T16:30:00",
        description: "Issue sent to legal for additional review."
      }
    ]
  }
];
