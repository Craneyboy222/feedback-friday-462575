import { useEffect, useState, RefObject } from 'react';

interface IntersectionObserverHook {
  isVisible: boolean;
  setNode: (node: HTMLElement | null) => void;
}

export function useIntersectionObserver(rootMargin = '0px'): IntersectionObserverHook {
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, rootMargin]);

  return { isVisible, setNode };
}