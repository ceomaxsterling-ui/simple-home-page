import { useEffect, useRef, useCallback } from 'react';

interface ProtectionOptions {
  disableTextSelection?: boolean;
  disableRightClick?: boolean;
  disableKeyboardShortcuts?: boolean;
  disablePrint?: boolean;
  disableDevTools?: boolean;
  enableDevToolsDetection?: boolean;
  enableBehaviorTracking?: boolean;
}

// Throttle function for performance optimization
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: any[]) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

const useContentProtectionOptimized = (options: ProtectionOptions = {}) => {
  const {
    disableTextSelection = true,
    disableRightClick = true,
    disableKeyboardShortcuts = true,
    disablePrint = true,
    disableDevTools = true,
    enableDevToolsDetection = true,
    enableBehaviorTracking = false // Disabled by default for better performance
  } = options;

  const devToolsDetectionRef = useRef<NodeJS.Timeout | null>(null);
  const consoleDetectionRef = useRef<NodeJS.Timeout | null>(null);
  const debuggerDetectionRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cleanupMethods: (() => void)[] = [];

    // Disable text selection with optimized event handling
    if (disableTextSelection) {
      const disableSelection = (e: Event) => {
        e.preventDefault();
        return false;
      };

      const selectionEvents = ['selectstart', 'dragstart'];
      selectionEvents.forEach(event => {
        document.addEventListener(event, disableSelection, { passive: false });
        cleanupMethods.push(() => document.removeEventListener(event, disableSelection));
      });
    }

    // Disable right click with optimized handling
    if (disableRightClick) {
      const disableContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        if (enableBehaviorTracking) {
          console.warn('Context menu access detected');
        }
        return false;
      };

      document.addEventListener('contextmenu', disableContextMenu, { passive: false });
      cleanupMethods.push(() => document.removeEventListener('contextmenu', disableContextMenu));
    }

    // Optimized keyboard shortcuts handling
    if (disableKeyboardShortcuts) {
      const disableKeys = (e: KeyboardEvent) => {
        const blockedKeys = [
          { key: 'F12' },
          { key: 'I', ctrl: true, shift: true },
          { key: 'J', ctrl: true, shift: true },
          { key: 'u', ctrl: true },
          { key: 's', ctrl: true },
          { key: 'a', ctrl: true },
          { key: 'c', ctrl: true },
          { key: 'C', ctrl: true, shift: true }
        ];

        if (disablePrint && e.ctrlKey && e.key === 'p') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Print attempt detected');
          }
          return false;
        }

        for (const blockedKey of blockedKeys) {
          if (
            e.key === blockedKey.key &&
            (!blockedKey.ctrl || e.ctrlKey) &&
            (!blockedKey.shift || e.shiftKey)
          ) {
            e.preventDefault();
            if (enableBehaviorTracking) {
              console.warn(`Blocked key combination: ${blockedKey.ctrl ? 'Ctrl+' : ''}${blockedKey.shift ? 'Shift+' : ''}${blockedKey.key}`);
            }
            return false;
          }
        }
      };

      document.addEventListener('keydown', disableKeys, { passive: false });
      cleanupMethods.push(() => document.removeEventListener('keydown', disableKeys));
    }

    // Optimized DevTools detection with much lower frequency
    if (enableDevToolsDetection) {
      const threshold = 160;
      let devtools = { open: false };
      
      // Reduced frequency from 500ms to 5000ms for better performance
      const checkDevTools = throttle(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          if (!devtools.open) {
            devtools.open = true;
            if (enableBehaviorTracking) {
              console.warn('DevTools detected');
            }
          }
        } else {
          devtools.open = false;
        }
      }, 5000);

      devToolsDetectionRef.current = setInterval(checkDevTools, 5000);
      cleanupMethods.push(() => {
        if (devToolsDetectionRef.current) {
          clearInterval(devToolsDetectionRef.current);
        }
      });

      // Optimized console access detection with reduced frequency
      if (enableBehaviorTracking) {
        const element = document.createElement('div');
        Object.defineProperty(element, 'id', {
          get: function() {
            console.warn('Console access detected');
            return 'devtools-detector';
          }
        });

        // Reduced frequency from 1000ms to 10000ms
        const consoleCheck = () => {
          console.log(element);
        };

        consoleDetectionRef.current = setInterval(consoleCheck, 10000);
        cleanupMethods.push(() => {
          if (consoleDetectionRef.current) {
            clearInterval(consoleDetectionRef.current);
          }
        });
      }
    }

    // Disable print with optimized implementation
    if (disablePrint) {
      const originalPrint = window.print;
      window.print = () => {
        if (enableBehaviorTracking) {
          console.warn('Print attempt via JavaScript detected');
        }
        return false;
      };

      cleanupMethods.push(() => {
        window.print = originalPrint;
      });
    }

    // Optimized anti-debugging with much lower frequency and better performance
    if (disableDevTools) {
      // Reduced frequency from 3000ms to 30000ms
      const antiDebugCheck = () => {
        const start = performance.now();
        debugger;
        const duration = performance.now() - start;
        if (duration > 100) {
          if (enableBehaviorTracking) {
            console.warn('Debugger detected');
          }
          // Removed automatic reload for better user experience
        }
      };

      debuggerDetectionRef.current = setInterval(antiDebugCheck, 30000);
      cleanupMethods.push(() => {
        if (debuggerDetectionRef.current) {
          clearInterval(debuggerDetectionRef.current);
        }
      });
    }

    // Cleanup function
    return () => {
      cleanupMethods.forEach(cleanup => cleanup());
      
      // Clear all intervals
      if (devToolsDetectionRef.current) {
        clearInterval(devToolsDetectionRef.current);
      }
      if (consoleDetectionRef.current) {
        clearInterval(consoleDetectionRef.current);
      }
      if (debuggerDetectionRef.current) {
        clearInterval(debuggerDetectionRef.current);
      }
    };
  }, [disableTextSelection, disableRightClick, disableKeyboardShortcuts, disablePrint, disableDevTools, enableDevToolsDetection, enableBehaviorTracking]);
};

export default useContentProtectionOptimized;