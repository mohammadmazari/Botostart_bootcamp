import { useState, useEffect } from "react";

export default function DarkmodeBtn() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setTimeout(() => {
      setIsDark((prev) => !prev);
    }, 300); // ⏳ تأخیر 300 میلی‌ثانیه‌ای قبل از تغییر تم
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div className="w-14 h-8 bg-indigo-800 rounded-full peer-checked:bg-purple-600 transition-colors duration-500"></div>
      <div className="absolute w-6 h-6 bg-indigo-800 rounded-full left-1 bottom-1 peer-checked:translate-x-6 peer-checked:bg-purple-500 shadow-[inset_8px_-4px_0px_0px_#fff000] peer-checked:shadow-[inset_15px_-4px_0px_15px_#fff000] transition-all duration-500"></div>
    </label>
  );
}
