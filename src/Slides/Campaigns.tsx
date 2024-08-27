import { InlineCode } from '@/components/InlineCode';
import { Slide } from '@/components/Slide';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { A } from '@/components/ui/typography/a';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';
import { OL } from '@/components/ui/typography/ol';
import { P } from '@/components/ui/typography/p';

export function Campaigns() {
  return (
    <>
      <Slide>
        <H2>
          <div className='mb-2'>How to build an a11y campaign</div>
          <div className='fragment'>(or at least how I'm thinking about it)</div>
        </H2>
      </Slide>

      <Slide>
        <H2>Start with automated tools</H2>

        <P className='fragment'>
          Lots of tools on the market. They're all basically HTML in, violations out and let you configure based on
          severity level.
        </P>

        <OL className='fragment'>
          <li>
            Lint rules - <InlineCode>eslint-plugin-jsx-a11y</InlineCode> + some standalone ones
          </li>
          <li>Browser extensions</li>
          <li>Figma plugin</li>
          <li>Storybook plugins</li>
          <li>Jest/Vitest reporters</li>
          <li>E2E test reporters</li>
          <li>CI integrations</li>
        </OL>
      </Slide>

      <Slide>
        <H3>⚠️ Automated tools only establish a baseline</H3>

        <P className='fragment mt-6'>
          <A href='https://www.deque.com/automated-accessibility-testing-coverage/' external>
            Deque's automated accessibility testing coverage report
          </A>{' '}
          automated tools only catch issues to address 20-30% of WCAG SCs, 78% of which fall into just 5 SCs.
        </P>

        <P className='fragment'>
          The UK government used 10 popular tools on the least accessible site ever and{' '}
          <A
            href='https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/'
            external
          >
            only caught 71% of issues across all of them
          </A>
          .
        </P>
      </Slide>

      <Slide>
        <H3>Focus on the top 7 SCs at first</H3>

        <P className='mt-6'>80%+ of all issues fall into the top 7 SCs, with contrast alone being 30%</P>

        <Table className='fragment mt-6 text-2xl'>
          <TableHeader>
            <TableRow>
              <TableHead>Success Criteria #</TableHead>
              <TableHead>Success Criteria name</TableHead>
              <TableHead className='text-right'>% of all issues</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>1.4.3</TableCell>
              <TableCell>Contrast (Minimum)</TableCell>
              <TableCell className='text-right'>30.08%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4.1.2</TableCell>
              <TableCell>Name, Role, Value</TableCell>
              <TableCell className='text-right'>16.37%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>1.3.1</TableCell>
              <TableCell>Info and Relationships</TableCell>
              <TableCell className='text-right'>12.33%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4.1.1</TableCell>
              <TableCell>Parsing</TableCell>
              <TableCell className='text-right'>11.69%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>1.1.1</TableCell>
              <TableCell>Non-text Content</TableCell>
              <TableCell className='text-right'>8.04%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2.4.3</TableCell>
              <TableCell>Focus Order</TableCell>
              <TableCell className='text-right'>3.24%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2.1.1</TableCell>
              <TableCell>Keyboard</TableCell>
              <TableCell className='text-right'>3.19%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>

      <Slide>
        <H3>If you have a design system, optimize that first</H3>

        <P className='fragment mt-6'>Lots of issues happen in userland but this is the most bang for buck activity.</P>
      </Slide>

      <Slide>
        <H3>The rest is all manual</H3>

        <OL className='mt-6'>
          <li className='fragment'>Review resources</li>
          <li className='fragment'>Educate</li>
          <li className='fragment'>Write about it</li>
          <li className='fragment'>Give talks</li>
          <li className='fragment'>Be a line of defense</li>
          <li className='fragment'>Run third party audits</li>
        </OL>
      </Slide>

      <Slide>
        <H3>Additional resources</H3>

        <OL className='mt-6'>
          <li>
            <A href='https://web.dev/learn/accessibility' external>
              web.dev free course - Learn Accessibility
            </A>
          </li>
          <li>
            <A href='https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g' external>
              A11ycasts playlist on YouTube
            </A>
          </li>
          <li>
            <A href='https://developer.mozilla.org/en-US/docs/Web/Accessibility' external>
              MDN Accessibility reference
            </A>
          </li>
          <li>
            <A href='https://www.sarasoueidan.com/blog/' external>
              Sara Soueidan's blog
            </A>
          </li>
          <li>
            <A href='https://frontendmasters.com/topics/accessibility/' external>
              Frontend Masters accessibility courses
            </A>
          </li>
        </OL>
      </Slide>
    </>
  );
}
