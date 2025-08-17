'use client';
import { useEffect, useState } from "react";

export default function ThemeToggle({ dark, setDark }) {
  // const [dark, setDark] = useState(false);

  // Optional: load saved theme on first render
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     setDark(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   if (dark) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //     setDark(false);
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //     setDark(true);
  //   }
  // };

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`fixed top-4 right-4 px-3 py-1 rounded-md transition-colors duration-300
        ${dark ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"}`}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
