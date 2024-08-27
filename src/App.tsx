import React from 'react';

import { Campaigns } from './Slides/Campaigns';
import { Slide } from '@/components/Slide';
import type { Theme } from '@/components/theme/theme-provider';
import { useTheme } from '@/components/theme/useTheme';
import { H1 } from '@/components/ui/typography/h1';
import { H2 } from '@/components/ui/typography/h2';
import { Definition } from '@/Slides/Definition';
import { HowToBuildAccessibly } from '@/Slides/HowToBuildAccessibly';
import { Intro } from '@/Slides/Intro';
import { MiscTips } from '@/Slides/MiscTips';
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

      <QuestionsSlide />

      <Campaigns />

      <Slide>
        <H2>Thanks!</H2>
      </Slide>
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
