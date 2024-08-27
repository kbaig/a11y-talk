import { InlineCode } from '@/components/InlineCode';
import { Slide } from '@/components/Slide';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { A } from '@/components/ui/typography/a';
import { Blockquote } from '@/components/ui/typography/blockquote';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';
import { H4 } from '@/components/ui/typography/h4';
import { OL } from '@/components/ui/typography/ol';
import { P } from '@/components/ui/typography/p';

export function StarterResources() {
  return (
    <>
      <Slide>
        <H2>Resources to get you started</H2>
      </Slide>

      <Slide>
        <H3>Web Accessibility Initiative (WAI)</H3>

        <P className='fragment'>Created by W3C</P>

        <Blockquote className='fragment'>
          The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
          implement accessibility.
        </Blockquote>

        <P className='fragment text-center'>
          <A href='https://www.w3.org/WAI' external>
            https://www.w3.org/WAI
          </A>
        </P>
      </Slide>

      <Slide>
        <P>The WAI site is a general resource</P>

        <OL>
          <li className='fragment'>A11y fundamentals</li>
          <li className='fragment'>Advice for evaluating a11y on your site</li>
          <li className='fragment'>Courses</li>
          <li className='fragment'>Research</li>
        </OL>
      </Slide>

      <Slide>
        <H3>Web Content Accessibility Guidelines (WCAG)</H3>

        <P className='fragment'>Versioned standards document serving as the de facto a11y standard for the web</P>

        <P className='fragment text-center'>
          <A href='https://www.w3.org/TR/WCAG22' external>
            https://www.w3.org/TR/WCAG22
          </A>
        </P>
      </Slide>

      <Slide>
        <H3>WCAG versions</H3>

        <Table className='mt-6'>
          <TableHeader>
            <TableRow>
              <TableHead>Version</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Additions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className='fragment'>
              <TableCell>2.0</TableCell>
              <TableCell>Dec '08</TableCell>
              <TableCell>12 guidelines</TableCell>
            </TableRow>

            <TableRow className='fragment'>
              <TableCell>2.1</TableCell>
              <TableCell>June '18</TableCell>
              <TableCell>1 guideline, 17 success criteria</TableCell>
            </TableRow>

            <TableRow className='fragment'>
              <TableCell>2.2</TableCell>
              <TableCell>Oct '23</TableCell>
              <TableCell>9 success criteria</TableCell>
            </TableRow>

            <TableRow className='fragment'>
              <TableCell>3</TableCell>
              <TableCell>?</TableCell>
              <TableCell>Ground-up restructure</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>

      <Slide>
        <H3>WCAG structure</H3>
      </Slide>

      <Slide>
        <H4>Principles (4) - foundations</H4>

        <OL>
          <li className='fragment'>Perceivable</li>
          <li className='fragment'>Operable</li>
          <li className='fragment'>Understandable</li>
          <li className='fragment'>Robust</li>
        </OL>
      </Slide>

      <Slide>
        <H4>Guidelines (13) - Goals</H4>

        <OL>
          <li className='fragment'>Non-text content (Perceivable)</li>
          <li className='fragment'>Navigable (Operable)</li>
          <li className='fragment'>Predictable (Understandable)</li>
          <li className='fragment'>Compatible (Robust)</li>
        </OL>
      </Slide>

      <Slide>
        <H4>Success criteria</H4>

        <OL>
          <li className='fragment'>Specific and testable</li>
          <li className='fragment'>These are your actual checkboxes</li>
          <li className='fragment'>Have conformance levels - A, AA, AAA</li>
        </OL>
      </Slide>

      <Slide>
        <H4>Conformance levels</H4>

        <div className='fragment w-[70%] max-w-3xl mt-8 mx-auto p-4'>
          <div className='relative'>
            <div className='flex justify-between mb-4 text-2xl'>
              <div className='flex flex-col gap-2 transform -translate-x-[50%]'>
                <div>Essential</div>
                <div>Reasonable to achieve</div>
                <div>Applies to all websites</div>
              </div>

              <div className='flex flex-col gap-2 transform translate-x-[50%]'>
                <div>Nicer to have</div>
                <div>Harder to achieve</div>
                <div>Applies to some websites</div>
              </div>
            </div>

            <div className='h-4 bg-gradient-to-r from-gray-100 to-gray-900 rounded-full' />

            <div className='flex justify-between mt-2'>
              <div className='w-1/3 text-center transform -translate-x-[calc(50%-4px)]'>
                <div className='w-1 h-3 bg-gray-300 mx-auto mb-1'></div>
                <span>A</span>
              </div>
              <div className='w-1/3 text-center'>
                <div className='w-1 h-3 bg-gray-300 mx-auto mb-1'></div>
                <span>AA</span>
              </div>
              <div className='w-1/3 text-center transform translate-x-[calc(50%-4px)]'>
                <div className='w-1 h-3 bg-gray-300 mx-auto mb-1'></div>
                <span>AAA</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <H3>Bringing it all together</H3>

        <OL>
          <li className='fragment'>You meet a version of WCAG at a conformance level</li>

          <li className='fragment'>
            For example,{' '}
            <span className='fragment'>
              you meet WCAG 2.0 AA if you meet all the success criteria under WCAG 2.0 Level A and Level AA
            </span>
            <span className='fragment'>
              , or provide an alternative version of your experience that does conform to Level AA
            </span>
          </li>

          <li className='fragment'>
            Most people aim for WCAG 2.2 AA. Some target WCAG 2.2 AAA (government for example)
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>
          <div>Accessible Rich Internet Applications</div>
          <div className='fragment mt-2'>(WAI-ARIA)</div>
        </H3>

        <P className='fragment'>
          Specification for roles, states, and properties to make interactive components accessible
        </P>

        <P className='fragment'>
          This is where the all the <InlineCode>role</InlineCode> and <InlineCode>aria-*</InlineCode> HTML attributes
          you've probably seen come from.
        </P>

        <P className='fragment text-center'>
          <A href='https://www.w3.org/TR/WCAG22' external>
            https://www.w3.org/TR/wai-aria/
          </A>
        </P>
      </Slide>

      <Slide>
        <H4>Role categories</H4>

        <OL>
          <li className='fragment'>Abstract</li>
          <li className='fragment'>Widget</li>
          <li className='fragment'>Document structure</li>
          <li className='fragment'>Landmark</li>
          <li className='fragment'>Live region</li>
          <li className='fragment'>Window</li>
        </OL>
      </Slide>

      <Slide>
        <H4>States and properties</H4>

        <P className='fragment'>Give semantic information about widget/region/window element.</P>

        <OL>
          <li className='fragment'>
            States generally change often - <InlineCode>aria-expanded</InlineCode>
          </li>
          <li className='fragment'>
            Properties generally do not change often - <InlineCode>aria-labelledby</InlineCode>
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>Accessibility tree</H3>

        <OL>
          <li className='fragment'>Tree representation of your webpage content, parallel to the DOM</li>
          <li className='fragment'>This is the source of truth for assistive technology</li>
          <li className='fragment'>
            All DOM elements have a representation, unless hidden with <InlineCode>display: none</InlineCode>,{' '}
            <InlineCode>visibility: hidden</InlineCode>, or <InlineCode>aria-hidden</InlineCode>
          </li>
          <li className='fragment'>
            Available in devtools: inspect element <span className='text-5xl'>→</span> Accessibility tab, to the right
            of Styles
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>
          ⚠️{' '}
          <A href='https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/' external>
            No ARIA is better than Bad ARIA
          </A>
        </H3>

        <Blockquote className='fragment'>
          Functionally, ARIA roles, states, and properties are analogous to a CSS for assistive technologies. For screen
          reader users, ARIA controls the rendering of their non-visual experience. Incorrect ARIA misrepresents visual
          experiences, with potentially devastating effects on their corresponding non-visual experiences.
        </Blockquote>

        <OL>
          <li className='fragment'>A role is a promise you must not break</li>
          <li className='fragment'>A role is an override, for better or worse</li>
        </OL>
      </Slide>
    </>
  );
}
