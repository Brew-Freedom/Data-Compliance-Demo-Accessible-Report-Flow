import { useState } from "react";
import Sidebar from "./Sidebar";
import ReportFlow from "./ReportFlow";
import AuditTimeline from "./AuditTimeline";
import LegalQueue from "./LegalQueue";
import Exports from "./Exports";

export default function App() {
  const [activeView, setActiveView] = useState("report");

  function renderView() {
    switch (activeView) {
      case "audit":
        return <AuditTimeline />;
      case "legal":
        return <LegalQueue />;
      case "exports":
        return <Exports />;
      default:
        return <ReportFlow />;
    }
  }

  return (
    <div className="app-layout">
      <Sidebar active={activeView} onChange={setActiveView} />
      <main className="app-content">{renderView()}</main>
    </div>
  );
}
