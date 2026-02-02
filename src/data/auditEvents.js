export const auditEvents = [
  {
    id: 1,
    timestamp: "2026-02-01T14:10:00",
    title: "Potential sensitive data reported",
    dataset: "customer_uploads_q3.xlsx",

    simulatedLLMReasoning: [
      {
        step: 1,
        confidence: "High",
        policyRef: "Privacy Policy §3.2",
        execText:
          "This dataset may include customer information that requires review.",
        legalText:
          "User-selected classification indicates potential personal data under GDPR/CCPA definitions."
      },
      {
        step: 2,
        confidence: "Medium",
        policyRef: "Data Handling Standard §4.1",
        execText:
          "Customer uploads are higher risk and need extra checks.",
        legalText:
          "Unstructured customer-provided datasets frequently contain identifiers or quasi-identifiers."
      },
      {
        step: 3,
        confidence: "High",
        policyRef: "AI Training Policy §2.5",
        execText:
          "Company rules require a human to review this before use.",
        legalText:
          "Automated approval is prohibited when personal data risk is present."
      }
    ]
  }
];
