
// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount: check system preference or saved setting
    const root = window.document.documentElement;
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    root.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newIsDark = !isDark;
    root.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    setIsDark(newIsDark);
  };

  return { isDark, toggleDarkMode };
}
