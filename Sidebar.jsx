export default function Sidebar({ active, onChange }) {
  const items = [
    { id: "report", label: "Report Issue", icon: "📋" },
    { id: "audit", label: "Audit Timeline", icon: "🧾" },
    { id: "legal", label: "Legal Review Queue", icon: "⚖️" },
    { id: "exports", label: "Exports", icon: "📤" }
  ];

  return (
    <nav className="sidebar" aria-label="Primary navigation">
      <h2 className="sidebar-title">AI Data Compliance</h2>

      <ul className="sidebar-list">
        {items.map(item => (
          <li key={item.id}>
            <button
              className={`sidebar-item ${
                active === item.id ? "active" : ""
              }`}
              onClick={() => onChange(item.id)}
              aria-current={active === item.id ? "page" : undefined}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
