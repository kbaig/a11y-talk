import { InlineCode } from '@/components/InlineCode';
import { Slide } from '@/components/Slide';
import { A } from '@/components/ui/typography/a';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';
import { OL } from '@/components/ui/typography/ol';
import { P } from '@/components/ui/typography/p';

export function HowToBuildAccessibly() {
  return (
    <>
      <Slide>
        <H2>How to build accessibly</H2>
      </Slide>

      <Slide>
        <H3>It's a design problem before it's a programming problem</H3>

        <OL>
          <li className='fragment'>
            This doesn't mean it's not your problem!<span className='fragment'> Your job is to educate</span>
          </li>
          <li className='fragment'>As much as possible, try to solve in design space rather than code</li>
        </OL>
      </Slide>

      <Slide>
        <H2>Advice based on type of disability</H2>

        <P className='fragment mt-6'>
          These are highly overlapping.<span className='fragment'> Try to pick out curb cut effect examples!</span>
        </P>
      </Slide>

      <Slide>
        <H3>Auditory</H3>

        <OL className='mt-6'>
          <li className='fragment'>Never rely solely on audio - notification sounds, video</li>
          <li className='fragment'>Add media player controls</li>
          <li className='fragment'>Provide alternatives and summaries for audio and video</li>
          <li className='fragment'>Keep language simple</li>
        </OL>
      </Slide>

      <Slide>
        <H3>Cognitive & Neurological</H3>

        <OL className='mt-6'>
          <li className='fragment'>
            Keep content readable and understandable. Ensure that your application operates predictably
          </li>
          <li className='fragment'>
            Anticipate common failure modes in your UX and help guide users along the right path
          </li>
          <li className='fragment'>
            Provide users enough time to read and use content. Limit toast notifications and keep them around when being
            interacted with
          </li>
          <li className='fragment'>Provide alternative, simpler views that don't lose information or structure</li>
        </OL>
      </Slide>

      <Slide>
        <OL className='mt-6'>
          <li>Avoid flickering content</li>
          <li className='fragment'>
            Respect <InlineCode>prefers-reduced-motion</InlineCode> media feature
          </li>
          <li className='fragment'>Be careful when using serif fonts</li>
          <li className='fragment'>Don't overdo contrast</li>
        </OL>
      </Slide>

      <Slide>
        <H3>Physical</H3>

        <OL className='mt-6'>
          <li className='fragment'>Ensure content, especially interactive elements, are large enough</li>
          <li className='fragment'>
            Rethink spacing so that content is not too hard to read but is still logically grouped
          </li>
          <li className='fragment'>Reconsider or provide alternatives to high-prevision tasks such as CAPTCHA</li>
          <li className='fragment'>Support multiple input types - keyboard, mouse, touch</li>
        </OL>
      </Slide>

      <Slide>
        <H3>Speech</H3>

        <OL className='mt-6'>
          <li className='fragment'>Be selective with your speech recognition software</li>
          <li className='fragment'>Provide alternatives to speech input</li>
        </OL>
      </Slide>

      <Slide>
        <H3>Visual</H3>

        <OL className='mt-6'>
          <li className='fragment'>
            <A
              href='https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23F2F2F2%0D%0A%23DDDDDD%0D%0A%23CCCCCC%0D%0A%23888888%0D%0A%23404040%2C%20Charcoal%0D%0A%23000000%2C%20Black%0D%0A%232F78C5%2C%20Effective%20on%20Extremes%0D%0A%230F60B6%2C%20Effective%20on%20Lights%0D%0A%23398EEA%2C%20Ineffective%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp'
              external
            >
              Contrast
            </A>{' '}
            for essential content - 4.5:1 for large text and 3:1 for small text under AA, 7:1 for AAA
          </li>
          <li className='fragment'>
            Respect <InlineCode>prefers-contrast</InlineCode>, <InlineCode>foced-colors</InlineCode>,{' '}
            <InlineCode>inverted-colors</InlineCode> media features
          </li>
          <li className='fragment'>Set font size and line height for comfortable reading</li>
          <li className='fragment'>Prefer single column layouts</li>
          <li className='fragment'>Screen reader support</li>
        </OL>
      </Slide>

      <Slide>
        <H2>Coding up your feature accessibly</H2>
      </Slide>

      <Slide>
        <H3>Start with good markup</H3>

        <P className='fragment mt-6'>HTML elements are the lego blocks of your webpage. CSS is seasoning.</P>

        <P className='fragment mt-6'>
          Markup is to <i>mark content up</i>.
        </P>

        <P className='fragment'>
          In principle, we're just using JavaScript to backfill widgets that aren't available out of the box yet.
          <span className='fragment'>
            {' '}
            ARIA roles, states, and properties are there to help us convey meaning that a native HTML would implicitly
            have.
          </span>
        </P>
      </Slide>

      <Slide>
        <H3>
          <div>Pop quiz</div>
          <div className='fragment mt-4'>How many list container element types are there?</div>
        </H3>

        <P className='fragment mt-6 text-center'>
          <InlineCode>ul</InlineCode>
          <span className='fragment'>
            , <InlineCode>ol</InlineCode>
          </span>
          <span className='fragment'>
            , and <InlineCode>dl</InlineCode>
          </span>
        </P>

        <P className='fragment text-center'>
          <A href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl' external>
            MDN on dl element
          </A>
        </P>
      </Slide>

      <Slide>
        <P>
          Start with clean semantic HTML.{' '}
          <span className='fragment'>
            Have it make sense on its own like it's an article, blog, or forum post. No <InlineCode>div</InlineCode> and{' '}
            <InlineCode>span</InlineCode> soup yet!
          </span>
          <span className='fragment'> Add containers afterward for styling and structure.</span>
        </P>
      </Slide>

      <Slide>
        <H3>Maintain good focus order</H3>

        <OL className='mt-6'>
          <li className='fragment'>
            Users use <InlineCode>Tab</InlineCode> and <InlineCode>Shift+Tab</InlineCode> keys to cycle through
            interactive elements.
            <span className='fragment'>
              {' '}
              Think of the focus order as a sort of table of contents for the webpage's interactivity
            </span>
          </li>
          <li className='fragment'>All natively focusable interactive elements are interactive by default</li>
          <li className='fragment'>
            You can add <InlineCode>tabindex='0'</InlineCode> to make a nonfocusable element focusable but be very sure
            you should do this over using a <InlineCode>button</InlineCode>
          </li>
          <li className='fragment'>
            You can add <InlineCode>tabindex='-1'</InlineCode> to make a focusable element nonfocusable. This is sort of
            niche
          </li>
          <li className='fragment'>
            Other <InlineCode>tabindex</InlineCode> values are an antipattern. Order your content correctly. If visual
            order should be different, reorder visually with <InlineCode>flex</InlineCode> or{' '}
            <InlineCode>grid</InlineCode>
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>Consult good quality resources</H3>

        <P className='fragment mt-6'>
          I always start with the{' '}
          <A href='https://www.w3.org/WAI/ARIA/apg/patterns/' external>
            WAI-ARIA Patterns library
          </A>
          . It provides breakdowns for keyboard interaction and ARIA roles, states, and properties.
        </P>

        <P className='fragment'>
          Other good resources are{' '}
          <A href='https://www.radix-ui.com/primitives' external>
            Radix UI primitives
          </A>
          ,{' '}
          <A href='https://react-spectrum.adobe.com/react-aria/' external>
            React Aria
          </A>
          ,{' '}
          <A href='https://mui.com/' external>
            MUI
          </A>
          , and{' '}
          <A href='https://v2.chakra-ui.com/' external>
            Chakra UI
          </A>
          .
        </P>
      </Slide>
    </>
  );
}
