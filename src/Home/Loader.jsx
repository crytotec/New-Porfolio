// Loader.jsx
import { useEffect, useState } from "react";
import avater from "../Images/avater.png"; // make sure filename matches exactly

export default function Loader({ minDuration = 1000, onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const img = new Image();
    img.src = avater;

    const preload = new Promise((res) => {
      img.onload = () => res();
      img.onerror = () => res();
      setTimeout(res, 500); // safety fallback
    });

    preload.then(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      console.log("Loader: will hide in", remaining, "ms");
      setTimeout(() => {
        setVisible(false);
        if (typeof onDone === "function") onDone();
      }, remaining);
    });
  }, [minDuration, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
          aria-label="Loading"
        ></div>
        <div className="text-sm text-gray-600">Loading portfolio...</div>
      </div>
    </div>
  );
}
