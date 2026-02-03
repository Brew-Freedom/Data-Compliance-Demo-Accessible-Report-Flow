export default function Button({ children, variant = "primary", disabled, onClick }) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${
        disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : variants[variant]
      }`}
    >
      {children}
    </button>
  );
}
