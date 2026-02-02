import AuditTimeline from "../components/AuditTimeline";
import { auditEvents } from "../data/auditEvents";

export default function AuditLog() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">
          Review History
        </h1>
        <p className="text-gray-600 mt-1">
          A step-by-step record of reported data concerns and how they were reviewed.
        </p>
      </header>

      {auditEvents.length === 0 ? (
        <p className="text-gray-500">
          No reports yet. When a concern is reported, it will appear here.
        </p>
      ) : (
        <AuditTimeline events={auditEvents} />
      )}
    </main>
  );
}
