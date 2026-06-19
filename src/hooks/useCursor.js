import { useEffect, useState } from 'react';

/**
 * useCursor
 * Tracks mouse position for the custom cursor + cursor ring effect.
 * Demonstrates: useState + useEffect with event listener cleanup.
 */
export function useCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setRingPos({ x: e.clientX, y: e.clientY }), 60);
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return { pos, ringPos, hovering, setHovering };
}
