// src/hooks/useActiveSection.ts
import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Configuração do Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detecta quando a seção está no meio da tela
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Criar observer para cada seção
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};