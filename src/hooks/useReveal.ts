// src/hooks/useReveal.ts
import { DependencyList, useEffect, useRef } from 'react';

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  debug?: boolean;
  lateObserveMs?: number; // додатковий таймаут (ms) для повторного пошуку елементів
};

export function useReveal(options: Options = {}, deps: DependencyList = []) {
  const {
    root = null,
    rootMargin = '-20px',
    threshold = 0,
    once = false,
    debug = false,
    lateObserveMs = 50,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationRef = useRef<MutationObserver | null>(null);
  const observed = useRef<WeakSet<Element>>(new WeakSet());

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window))
      return;

    if (debug)
      console.debug('[useReveal] init', {
        once,
        rootMargin,
        threshold,
        depsLength: deps.length,
      });

    // cleanup попереднього інстансу
    observerRef.current?.disconnect();
    mutationRef.current?.disconnect();
    observed.current = new WeakSet();

    // створюємо IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (debug)
            console.debug(
              '[useReveal] IO',
              el,
              entry.isIntersecting,
              entry.intersectionRatio,
            );
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
      if (debug && els.length)
        console.debug(
          '[useReveal] observeMatches found',
          els.length,
          'in',
          rootNode,
        );
      els.forEach((el) => {
        // якщо вже видно і once=true — не підписуємо
        if (once && el.classList.contains('visible')) return;
        if (!observed.current.has(el)) {
          observed.current.add(el);
          observerRef.current?.observe(el);
          if (debug) console.debug('[useReveal] observing', el);
        }
        // додаткова миттєва перевірка: якщо елемент вже в видимій частині — позначаємо visible негайно
        try {
          const rect = el.getBoundingClientRect();
          if (!root) {
            const winH = window.innerHeight;
            const margin = parseInt(
              (rootMargin || '').match(/-?\d+/)?.[0] ?? '0',
              10,
            );
            if (rect.top < winH - margin && rect.bottom > margin) {
              if (!el.classList.contains('visible')) {
                el.classList.add('visible');
                if (debug)
                  console.debug('[useReveal] immediate visible added', el);
                if (once) {
                  try {
                    observerRef.current?.unobserve(el);
                  } catch (e) {
                    void e;
                  }
                  observed.current.delete(el);
                }
              }
            }
          } else {
            const rootRect = (root as Element).getBoundingClientRect();
            const margin = parseInt(
              (rootMargin || '').match(/-?\d+/)?.[0] ?? '0',
              10,
            );
            if (
              rect.top < rootRect.bottom - margin &&
              rect.bottom > rootRect.top + margin
            ) {
              if (!el.classList.contains('visible')) {
                el.classList.add('visible');
                if (debug)
                  console.debug(
                    '[useReveal] immediate visible added (root)',
                    el,
                  );
                if (once) {
                  try {
                    observerRef.current?.unobserve(el);
                  } catch (e) {
                    void e;
                  }
                  observed.current.delete(el);
                }
              }
            }
          }
        } catch (e) {
          void e;
        }
      });
    };

    // початкова підписка на всі вже наявні елементи
    observeMatches(document);

    // додаткові захисні повторні перевірки:
    // 1) requestAnimationFrame — підхопити елементи, які будуть змонтовані одразу після commit
    // 2) setTimeout(lateObserveMs) — підхопити елементи, які монтуються трохи пізніше (async data)
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => observeMatches(document));
      const t = window.setTimeout(
        () => observeMatches(document),
        lateObserveMs,
      );
      // очищення таймауту у return
      // (не використовується десь ще — ми просто забезпечуємо повторний виклик)
      void t;
    }

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
      if (debug) console.debug('[useReveal] cleanup');
      observerRef.current?.disconnect();
      observerRef.current = null;
      mutationRef.current?.disconnect();
      mutationRef.current = null;
      observed.current = new WeakSet();
    };
    // deps дозволяють форсити перевстановлення при зміні маршруту / меню / інших залежностях
  }, deps);
}
