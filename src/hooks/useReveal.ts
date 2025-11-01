// src/hooks/useReveal.ts
import { DependencyList, useEffect, useRef } from 'react';

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useReveal(options: Options = {}, deps: DependencyList = []) {
  const {
    root = null,
    rootMargin = '-20px',
    threshold = 0,
    once = false,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationRef = useRef<MutationObserver | null>(null);
  const observed = useRef<WeakSet<Element>>(new WeakSet());

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window))
      return;

    // cleanup попереднього інстансу
    observerRef.current?.disconnect();
    mutationRef.current?.disconnect();
    observed.current = new WeakSet();

    // створюємо IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('visible');
            if (once) {
              try {
                observerRef.current?.unobserve(el);
              } catch (e) {
                void e;
              }
              observed.current.delete(el);
            }
          } else {
            if (!once) el.classList.remove('visible');
          }
        });
      },
      { root, rootMargin, threshold },
    );

    // функція, яка підписує всі .hidden.reveal у переданому корені (document або новий вузол)
    const observeMatches = (rootNode: ParentNode = document) => {
      const els = Array.from(
        rootNode.querySelectorAll<HTMLElement>('.hidden.reveal'),
      );
      els.forEach((el) => {
        // якщо вже видно і once=true — не підписуємо
        if (once && el.classList.contains('visible')) return;
        if (!observed.current.has(el)) {
          observed.current.add(el);
          observerRef.current?.observe(el);
        }
      });
    };

    // початкова підписка на всі вже наявні елементи
    observeMatches(document);

    // MutationObserver — підхоплює динамічно додані елементи або зміну класів
    mutationRef.current = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'childList' && m.addedNodes && m.addedNodes.length) {
          m.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              observeMatches(node as ParentNode);
            }
          });
        }
        // якщо хтось додає/змінює клас у вже існуючому елементі
        if (
          m.type === 'attributes' &&
          (m.target as Element).matches?.('.hidden.reveal')
        ) {
          observeMatches(m.target as ParentNode);
        }
      }
    });

    // слухаємо весь document — childList + subtree + attributes(class)
    mutationRef.current.observe(document.documentElement || document, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      mutationRef.current?.disconnect();
      mutationRef.current = null;
      observed.current = new WeakSet();
    };
    // deps дозволяють форсити перевстановлення при зміні маршруту / меню / інших залежностях
  }, deps);
}
