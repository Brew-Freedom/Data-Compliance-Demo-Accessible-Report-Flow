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

    aiExplanation: {
      summary:
        "This data was flagged because it may include personal information that should not be used for AI training without review.",
      whyItMatters:
        "Using personal or sensitive data without proper handling can create legal and privacy risks.",
      whatHappensNext:
        "A compliance reviewer will examine the data. If needed, it will be escalated to legal for guidance before any model uses it."
    },

    steps: [
      {
        time: "2026-02-01T14:10:00",
        description: "A user flagged a potential data concern."
      },
      {
        time: "2026-02-01T15:05:00",
        description: "Compliance team began reviewing the report."
      }
    ]
  }
];
