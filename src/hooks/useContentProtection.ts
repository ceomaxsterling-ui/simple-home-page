import { useEffect } from 'react';

interface ProtectionOptions {
  disableTextSelection?: boolean;
  disableRightClick?: boolean;
  disableKeyboardShortcuts?: boolean;
  disablePrint?: boolean;
  disableDevTools?: boolean;
  enableDevToolsDetection?: boolean;
  enableBehaviorTracking?: boolean;
}

const useContentProtection = (options: ProtectionOptions = {}) => {
  const {
    disableTextSelection = true,
    disableRightClick = true,
    disableKeyboardShortcuts = true,
    disablePrint = true,
    disableDevTools = true,
    enableDevToolsDetection = true,
    enableBehaviorTracking = true
  } = options;

  useEffect(() => {
    const protectionMethods: (() => void)[] = [];
    const cleanupMethods: (() => void)[] = [];

    // Disable text selection
    if (disableTextSelection) {
      const disableSelection = (e: Event) => {
        e.preventDefault();
        return false;
      };

      const disableSelectionEvents = ['selectstart', 'dragstart'];
      disableSelectionEvents.forEach(event => {
        document.addEventListener(event, disableSelection);
        cleanupMethods.push(() => document.removeEventListener(event, disableSelection));
      });
    }

    // Disable right click
    if (disableRightClick) {
      const disableContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        if (enableBehaviorTracking) {
          console.warn('Tentativa de acesso ao menu de contexto detectada');
        }
        return false;
      };

      document.addEventListener('contextmenu', disableContextMenu);
      cleanupMethods.push(() => document.removeEventListener('contextmenu', disableContextMenu));
    }

    // Disable keyboard shortcuts
    if (disableKeyboardShortcuts) {
      const disableKeys = (e: KeyboardEvent) => {
        // F12 - Developer Tools
        if (e.key === 'F12') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de abrir DevTools (F12) detectada');
          }
          return false;
        }

        // Ctrl + Shift + I - Developer Tools
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de abrir DevTools (Ctrl+Shift+I) detectada');
          }
          return false;
        }

        // Ctrl + Shift + J - Console
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de abrir Console (Ctrl+Shift+J) detectada');
          }
          return false;
        }

        // Ctrl + U - View Source
        if (e.ctrlKey && e.key === 'u') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de visualizar código fonte detectada');
          }
          return false;
        }

        // Ctrl + S - Save Page
        if (e.ctrlKey && e.key === 's') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de salvar página detectada');
          }
          return false;
        }

        // Ctrl + A - Select All
        if (e.ctrlKey && e.key === 'a') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de selecionar tudo detectada');
          }
          return false;
        }

        // Ctrl + C - Copy
        if (e.ctrlKey && e.key === 'c') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de cópia detectada');
          }
          return false;
        }

        // Ctrl + P - Print
        if (disablePrint && e.ctrlKey && e.key === 'p') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de impressão detectada');
          }
          return false;
        }

        // Ctrl + Shift + C - Inspect Element
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
          e.preventDefault();
          if (enableBehaviorTracking) {
            console.warn('Tentativa de inspecionar elemento detectada');
          }
          return false;
        }
      };

      document.addEventListener('keydown', disableKeys);
      cleanupMethods.push(() => document.removeEventListener('keydown', disableKeys));
    }

    // DevTools detection
    if (enableDevToolsDetection) {
      let devtools = { open: false, orientation: null };
      
      const threshold = 160;

      setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          if (!devtools.open) {
            devtools.open = true;
            if (enableBehaviorTracking) {
              console.warn('DevTools detectado como aberto');
            }
            // Clear console
            if (typeof console.clear === 'function') {
              console.clear();
            }
          }
        } else {
          devtools.open = false;
        }
      }, 500);

      // Alternative DevTools detection
      let element = document.createElement('div');
      Object.defineProperty(element, 'id', {
        get: function() {
          if (enableBehaviorTracking) {
            console.warn('DevTools console access detectado');
          }
          return 'devtools-detector';
        }
      });

      setInterval(() => {
        console.log(element);
        if (typeof console.clear === 'function') {
          console.clear();
        }
      }, 1000);
    }

    // Disable print
    if (disablePrint) {
      const disablePrintFunction = () => {
        if (enableBehaviorTracking) {
          console.warn('Tentativa de impressão via JavaScript detectada');
        }
        return false;
      };

      window.print = disablePrintFunction;
    }

    // Additional protection methods
    if (disableDevTools) {
      // Disable some debugging functions
      if (typeof console !== 'undefined') {
        const originalLog = console.log;
        console.log = function(...args: any[]) {
          // Still allow internal logging but discourage external use
          if (enableBehaviorTracking && args.length > 0) {
            originalLog.apply(console, ['[PROTECTED]', ...args]);
          }
        };
      }

      // Basic anti-debugging
      setInterval(() => {
        const start = performance.now();
        debugger;
        const duration = performance.now() - start;
        if (duration > 100) {
          if (enableBehaviorTracking) {
            console.warn('Debugger detectado');
          }
          window.location.reload();
        }
      }, 3000);
    }

    // Cleanup function
    return () => {
      cleanupMethods.forEach(cleanup => cleanup());
    };
  }, [disableTextSelection, disableRightClick, disableKeyboardShortcuts, disablePrint, disableDevTools, enableDevToolsDetection, enableBehaviorTracking]);
};

export default useContentProtection;