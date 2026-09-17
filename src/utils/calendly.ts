declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; [key: string]: unknown }) => void;
      closePopupWidget: () => void;
    };
  }
}

export const CALENDLY_EVENT_URL = 'https://calendly.com/swapniltechyy/30min';

// Palette matching the portfolio's theme:
// Cream (#F5F2EB), Black (#111111), Sage Green (#86A789)
const BRANDED_CALENDLY_URL = `${CALENDLY_EVENT_URL}?background_color=f5f2eb&text_color=111111&primary_color=86a789`;

let isEscapeListenerAttached = false;

function setupEscapeListener() {
  if (isEscapeListenerAttached || typeof window === 'undefined') return;

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      window.Calendly?.closePopupWidget?.();
    }
  });
  isEscapeListenerAttached = true;
}

function loadCalendlyAssets(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return resolve();

    // Check if Calendly is already loaded
    if (window.Calendly) {
      return resolve();
    }

    // Ensure CSS is loaded
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Ensure JS is loaded
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Calendly script')));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Calendly script'));
    document.head.appendChild(script);
  });
}

/**
 * Opens the Calendly booking popup modal using Calendly's official widget integration.
 */
export async function openCalendly(): Promise<void> {
  setupEscapeListener();

  try {
    await loadCalendlyAssets();
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: BRANDED_CALENDLY_URL,
      });
    }
  } catch (error) {
    console.error('Error opening Calendly modal:', error);
  }
}
