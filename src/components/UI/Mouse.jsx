import { useState, useEffect } from "react";

export default function CustomCursorDiv({children}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="z-index custom-area" 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      
      {isHovering && (
        <div
          className="custom-cursor"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}
    </div>
  );
}
