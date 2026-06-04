import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitial);

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // noop — safe fallback if storage or DOM isn't available
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((v) => !v)}
      role="switch"
      aria-checked={darkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md border px-3 py-2 flex items-center gap-2"
    >
      <span className="text-sm">{darkMode ? "☀️" : "🌙"}</span>
      <span className="text-sm">{darkMode ? "Light" : "Dark"}</span>
    </button>
  );
}