import { Code } from '@/components/Code';
import { InlineCode } from '@/components/InlineCode';
import { Slide } from '@/components/Slide';
import { A } from '@/components/ui/typography/a';
import { Blockquote } from '@/components/ui/typography/blockquote';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';
import { H4 } from '@/components/ui/typography/h4';
import { OL } from '@/components/ui/typography/ol';
import { P } from '@/components/ui/typography/p';

import ControllerAd from '@/img/controller-ad.png';
import CurbCut from '@/img/curb-cut.jpg';

export function Definition() {
  return (
    <>
      <Slide>
        <H2>What is accessibility on the web?</H2>
      </Slide>

      <Slide>
        <P>
          The extent to which anyone, regardless of ability or any other factor, can use your application or website
        </P>
      </Slide>

      <Slide>
        <H3>Or a11y for short</H3>

        <Code className='fragment'>
          {`const shorten = str => str.replace(
  /^(\\w)(\\w+)(\\w)$/,
  (_, f, m, l) => \`$\{f}\${m.length}\${l}\`
);

shorten('accessibility'); // a11y`}
        </Code>

        <Code className='fragment'>{`shorten('internationalization'); // i18n`}</Code>
      </Slide>

      <Slide>
        <H2>Why should I care about accessibility?</H2>

        <P className='text-center'>(in increasing importance)</P>
      </Slide>

      <Slide>
        <H3>To be a cool person</H3>
      </Slide>

      <Slide>
        <H3>You have to</H3>
      </Slide>

      <Slide>
        <H4>In the US</H4>

        <Blockquote className='fragment'>
          The Americans with Disabilities Act applies to state and local governments (Title II) and businesses that are
          open to the public (Title III).
        </Blockquote>

        <Blockquote className='fragment'>
          Businesses and state and local governments can currently choose how they will ensure that the programs,
          services, and goods they provide online are accessible to people with disabilities.
        </Blockquote>
      </Slide>

      <Slide>
        <div className='flex flex-col gap-6'>
          <div>Translation:</div>

          <P>
            <span className='fragment'>
              You have to make your app accessible but there's no set legal standard that you can follow.
            </span>{' '}
            <span className='fragment'>Compliance is on a best effort basis.</span>{' '}
            <span className='fragment'>
              Most people choose to follow WCAG 2.2 AA (more on that shortly){' '}
              <span className='fragment'>
                and get an auditor to sign off on a Voluntary Product Accessibility Template (VPAT).
              </span>
            </span>
          </P>

          <div className='fragment text-center'>😒</div>
        </div>
      </Slide>

      <Slide>
        <H4>In the EU</H4>

        <P className='fragment'>
          The European Accessibility Act (EAA) was signed into law in 2019 and requires all business to have accessible
          web content by June 2025.{' '}
          <span className='fragment'>
            It currently references WCAG 2.1 but doesn't explicitly set that as the legal standard.
          </span>
        </P>

        <div className='fragment mt-6'>😒</div>

        <P className='fragment'>Most people are choosing WCAG 2.2 AA for this too.</P>
      </Slide>

      <Slide>
        <H3>It's good for business</H3>
      </Slide>

      <Slide>
        <H4>Increases your total addressable market</H4>

        <OL>
          <li className='fragment'>More potential end users</li>
          <li className='fragment'>Some business partners have accessibility requirements</li>
        </OL>
      </Slide>

      <Slide>
        <H4>It's a bragging opportunity</H4>

        <div className='mx-auto my-4 max-w-[80%]'>
          <img className='block rounded-md' src={ControllerAd} alt='' />
        </div>
      </Slide>

      <Slide>
        <OL>
          <H3>
            Most importantly -<div className='fragment'>Making your app accessible is a forcing function.</div>
          </H3>

          <P className='fragment'>You'll end up with a much higher quality product by making it accessible.</P>

          <OL>
            <li className='fragment'>You'll end up helping more people than you realize</li>
            <li className='fragment'>If you can dodge a wrench, you can dodge a ball</li>
          </OL>
        </OL>
      </Slide>

      <Slide>
        <H2>Disabilities affecting web users</H2>

        <OL>
          <li className='fragment'>Auditory</li>
          <li className='fragment'>Cognitive</li>
          <li className='fragment'>Neurological</li>
          <li className='fragment'>Physical</li>
          <li className='fragment'>Speech</li>
          <li className='fragment'>
            Visual <span className='fragment'>(what we usually spend the most time on)</span>
          </li>
        </OL>
      </Slide>

      <Slide>
        <H2>External factors</H2>

        <OL>
          <li className='fragment'>
            Screens that are small (mobile phones, smart watches, smart fridges I assume) or far away (smart TVs, public
            display)
          </li>
          <li className='fragment'>Older people with changing abilities due to aging</li>
          <li className='fragment'>Temporary disabilities such as a broken arm or lost glasses</li>
          <li className='fragment'>
            Situational limitations (bright sunlight, environment where they can't listen to audio)
          </li>
          <li className='fragment'>Slow internet connection or limited/expensive bandwidth</li>
        </OL>
      </Slide>

      <Slide>
        <H2>Why bother with including all those other factors?</H2>
      </Slide>

      <Slide>
        <P className='text-center'>
          Allow me to introduce you to the{' '}
          <A href='https://en.wikipedia.org/wiki/Curb_cut_effect' external>
            curb cut effect
          </A>
        </P>
      </Slide>

      <Slide>
        <img className='rounded-md' src={CurbCut} alt='curb cut' />
      </Slide>

      <Slide>
        <Blockquote>
          The curb cut effect is the phenomenon of disability-friendly features being used and appreciated by a larger
          group than the people they were designed for.
        </Blockquote>
      </Slide>

      <Slide>
        <H4>A11y accommodations that we all use</H4>

        <OL>
          <li className='fragment'>Closed captions</li>
          <li className='fragment'>Automatic doors</li>
          <li className='fragment'>Text to speech</li>
          <li className='fragment'>Ergonomic devices</li>
        </OL>
      </Slide>

      <Slide>
        <H4>Ways a11y accomodations help us all on the web</H4>

        <OL>
          <li className='fragment'>Information is easier to parse</li>
          <li className='fragment'>Easier to use the application without touching the mouse</li>
          <li className='fragment'>Interactive content is more discoverable</li>
          <li className='fragment'>Applications are usable regardless of lighting conditions</li>
          <li className='fragment'>
            Alt tags improve SEO (more contextual content) and render when images are disabled
          </li>
        </OL>
      </Slide>

      <Slide>
        <H2>How people use the web while accounting for their disabilities</H2>
      </Slide>

      <Slide>
        <H3>Assistive Technologies</H3>

        <OL>
          <li className='fragment'>Screen readers - VoiceOver, JAWS, NVDA</li>
          <li className='fragment'>Screen magnifiers</li>
          <li className='fragment'>Alternative pointing devices</li>
          <li className='fragment'>
            OS-level configuration - <InlineCode>prefers-reduced-motion</InlineCode>,{' '}
            <InlineCode>prefers-color-scheme</InlineCode>, <InlineCode>prefers-contrast</InlineCode>
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>Adaptive strategies</H3>

        <OL>
          <li className='fragment'>Zooming in</li>
          <li className='fragment'>Turning captions on</li>
          <li className='fragment'>Reducing mouse speed</li>
        </OL>
      </Slide>
    </>
  );
}
