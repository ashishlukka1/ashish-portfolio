import React, { useEffect, useRef, useState } from "react";
import "./BlobCursor.css";

export default function BlobCursor() {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
    };

    const checkPointer = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && (el.tagName === "A" || el.tagName === "BUTTON")) {
        setIsPointer(true);
        const color = window.getComputedStyle(el).color;
        cursorRef.current.style.borderColor = color;
      } else {
        setIsPointer(false);
        cursorRef.current.style.borderColor = "transparent";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", checkPointer);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", checkPointer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`blob-cursor ${isPointer ? "pointer-active" : ""}`}
    />
  );
}
