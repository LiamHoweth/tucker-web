import { useRef, useEffect, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      elementsRef.current.forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
            elementsRef.current.delete(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elementsRef.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      node.classList.add('reveal');

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        node.classList.add('is-visible');
        return;
      }

      elementsRef.current.add(node);

      if (observerRef.current) {
        observerRef.current.observe(node);
      }
    },
    []
  );

  return ref;
}
