function SidebarItem({ label, active, badge }) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <span>{label}</span>
      {badge && <span className="badge-red">{badge}</span>}
    </div>
  );
}
