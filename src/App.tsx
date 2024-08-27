import React from 'react';

import type { Theme } from './components/theme/theme-provider';
import { useTheme } from './components/theme/useTheme';
import { H3 } from './components/ui/typography/h3';
import { HowToBuildAccessibly } from './Slides/HowToBuildAccessibly';
import { MiscTips } from './Slides/MiscTips';
import { Slide } from '@/components/Slide';
import { H1 } from '@/components/ui/typography/h1';
import { H2 } from '@/components/ui/typography/h2';
import { Definition } from '@/Slides/Definition';
import { Intro } from '@/Slides/Intro';
import { StarterResources } from '@/Slides/StarterResources';

function App() {
  const skipLinkTargetRef = React.useRef<HTMLParagraphElement>(null);
  useWindowThemeToggleFunction();

  return (
    <>
      <Slide>
        <H1>Where do I even start with learning accessibility?</H1>
        <a
          href='#content'
          className='sr-only focus:not-sr-only'
          onClick={(e) => {
            e.preventDefault();
            skipLinkTargetRef.current?.scrollIntoView();
          }}
        >
          Skip to "skip link" slide
        </a>
      </Slide>

      <Intro />

      <Definition />

      <QuestionsSlide />

      <StarterResources />

      <QuestionsSlide />

      <HowToBuildAccessibly />

      <QuestionsSlide />

      <MiscTips skipLinkTargetRef={skipLinkTargetRef} />

      <Slide>
        <H2>Thanks!</H2>
      </Slide>

      <Slide>
        <H2>Automated tools</H2>

        {/* * - a11y linter - eslint and standalone
         * - dev tools extensions
         * - deque figma plugin
         * - storybook plugins
         * - E2E reporters
         * - Unit test reports
         * - CI integrations */}
      </Slide>

      <Slide>
        <H3>Automated tools only help stem the bleeding</H3>

        {/* * Caution!
        https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
        30% of issues can be found automatically */}
      </Slide>

      

      {/* <Slide>
        <H2>How to audit accessibility for your application</H2>
      </Slide> */}
      {/* <Slide>
        <H2>How to build an a11y campaign</H2>
      </Slide> */}

      {/* 

        
      */}
    </>
  );
}

declare global {
  interface Window {
    setTheme?: (theme: Theme) => void;
  }
}

function useWindowThemeToggleFunction() {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    window.setTheme = setTheme;
  }, [setTheme]);
}

function QuestionsSlide() {
  return (
    <Slide>
      <H2>Questions</H2>
    </Slide>
  );
}

export default App;
