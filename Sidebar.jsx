// Demo component – simulated data
function SidebarItem({ label, active, badge }) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <span>{label}</span>
      {badge && <span className="badge-red">{badge}</span>}
    </div>
  );
}
<SidebarItem
  label="Legal Review Queue"
  badge="2"
/>
<span className="new-dot" aria-label="New item"></span>
