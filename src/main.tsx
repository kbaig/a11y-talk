import './theme/global.css';
import './theme/tailwind.css';

import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

import App from './App.tsx';
import { ThemeProvider } from './components/theme/theme-provider.tsx';
import { useTheme } from './components/theme/useTheme.tsx';
import { Toaster } from './components/ui/sonner.tsx';

const root = document.getElementById('root');

if (!root) throw new Error('No root');

interface RevealWrappeProps {
  children: React.ReactNode;
}

function RevealWrapper({ children }: RevealWrappeProps) {
  const deckDivRef = React.useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = React.useRef<Reveal.Api | null>(null); // reference to deck reveal instance
  const { theme } = useTheme();

  React.useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      plugins: [RevealHighlight],
      // highlight: {
      //   beforeHighlight: (hljs) => hljs.registerLanguage('javascript',javascript),
      // },
      transition: 'slide',
      view: 'scroll',

      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);

  React.useEffect(() => {
    const scrollPages = document.querySelectorAll('.scroll-page');

    for (const scrollPage of scrollPages) {
      if (scrollPage instanceof HTMLElement) scrollPage.style.backgroundColor = '';
    }
  }, [theme]);

  return (
    <div className='reveal' ref={deckDivRef}>
      <div className='slides'>{children}</div>
    </div>
  );
}

createRoot(root).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Toaster />

    <RevealWrapper>
      <StrictMode>
        <App />
      </StrictMode>
    </RevealWrapper>
  </ThemeProvider>,
);
