export default function Badge({ children, tone = "warning" }) {
  const tones = {
    warning: "bg-yellow-100 text-yellow-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

