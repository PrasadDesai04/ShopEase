import { useEffect, useRef } from 'react';

/**
 * useReveal
 * Custom hook that wraps the IntersectionObserver API.
 * Adds a 'visible' class to the referenced element when it scrolls into view.
 * Demonstrates: useRef (DOM reference) + useEffect (side effect / cleanup).
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);

    // Cleanup — disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return ref;
}
