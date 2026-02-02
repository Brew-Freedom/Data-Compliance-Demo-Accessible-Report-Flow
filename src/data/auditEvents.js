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
export const auditEvents = [
  {
    id: 1,
    timestamp: "2026-02-01T14:10:00",
    title: "Potential sensitive data reported",
    dataset: "customer_uploads_q3.xlsx",
    row: 417,
    status: "awaiting_review",

    simulatedLLMReasoning: [
      {
        step: 1,
        label: "Identify the concern",
        text:
          "The user selected 'Personal or sensitive data', which signals a possible privacy or regulatory issue."
      },
      {
        step: 2,
        label: "Assess risk level",
        text:
          "Data from customer uploads often contains names, emails, or identifiers. These require extra review before AI training."
      },
      {
        step: 3,
        label: "Apply policy rules",
        text:
          "Company policy requires human review when personal data may be involved. Automated approval is not allowed."
      },
      {
        step: 4,
        label: "Determine next action",
        text:
          "The issue was routed to the compliance queue so a reviewer can confirm whether the data is allowed, needs redaction, or must be removed."
      }
    ]
  }
];
