import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  memory?: {
    used: number;
    total: number;
  };
  timing?: {
    navigationStart: number;
    loadEventEnd: number;
    domContentLoaded: number;
  };
}

export const usePerformanceMonitor = (enabled: boolean = false) => {
  const metricsRef = useRef<PerformanceMetrics>({});

  useEffect(() => {
    if (!enabled) return;

    // Monitor memory usage (if available)
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        metricsRef.current.memory = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576) // MB
        };
      }
    };

    // Monitor page load performance
    const checkTiming = () => {
      const timing = performance.timing;
      metricsRef.current.timing = {
        navigationStart: timing.navigationStart,
        loadEventEnd: timing.loadEventEnd,
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
      };
    };

    // Initial checks
    checkMemory();
    checkTiming();

    // Monitor periodically (very low frequency for minimal impact)
    const interval = setInterval(() => {
      checkMemory();
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [enabled]);

  return metricsRef.current;
};