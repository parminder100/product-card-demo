'use client';
import { useEffect, useState } from "react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={`fixed top-4 right-4 px-3 py-1 z-[1] rounded-md transition-colors duration-300
        ${dark ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"}`}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
