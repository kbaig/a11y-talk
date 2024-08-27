import { Slide } from '@/components/Slide';
import { A } from '@/components/ui/typography/a';
import { H2 } from '@/components/ui/typography/h2';
import { OL } from '@/components/ui/typography/ol';
import { P } from '@/components/ui/typography/p';
import Amazon from '@/img/amazon-logo.webp';

import Plaid from '@/img/plaid-logo.png';
import TDA from '@/img/tda-logo.png';
import Upshot from '@/img/upshot-logo.png';
import Wolfram from '@/img/wolfram-logo.png';

export function Intro() {
  return (
    <>
      <Slide>
        <H2>Hi, I'm Kaz!</H2>

        <P className='fragment'>I'm a product engineer. I like working on things close to users.</P>
      </Slide>

      <Slide>
        <P>
          I currently lead a team at Plaid{' '}
          <img className='inline-block size-12 transform -translate-y-1' src={Plaid} alt='' />. We build shovels for
          fintech products.
        </P>

        <P className='leading-[3.5rem]'>
          <span className='fragment'>
            I've worked at Amazon <img className='inline-block size-12 transform -translate-y-1' src={Amazon} alt='' />
          </span>
          <span className='fragment'>
            , TD Ameritrade{' '}
            <span className='rounded-full bg-white size-12 inline-flex justify-center items-center transform translate-y-1'>
              <img className='size-10' src={TDA} alt='' />
            </span>
          </span>
          <span className='fragment'>
            , Upshot{' '}
            <span className='rounded-full bg-white size-12 inline-flex justify-center items-center'>
              <img className='size-7' src={Upshot} alt='' />
            </span>
          </span>
          <span className='fragment'>
            , and Wolfram Research{' '}
            <img className='inline-block size-12 transform -translate-y-1' src={Wolfram} alt='' />
          </span>
        </P>
      </Slide>

      <Slide>
        <P className='text-center'>
          Check me out at{' '}
          <A className='underline' href='https://www.kazbaig.com/' external>
            kazbaig.com
          </A>
        </P>
      </Slide>

      <Slide>
        <H2>Disclaimers</H2>

        <OL>
          <li className='fragment'>
            I'm an idealist. <span className='fragment'>We strive for perfection and work toward it</span>
          </li>
          <li className='fragment'>This is a deep subject. I'm also here to learn</li>
        </OL>
      </Slide>

      <Slide>
        <H2>Background</H2>

        <P className='fragment'>
          I recently volunteered to improve accessibility across the company.
          <span className='fragment'> This is an attempt at a primer to get my colleagues up to speed.</span>
        </P>
      </Slide>

      <Slide>
        <H2>Quick poll</H2>
      </Slide>
    </>
  );
}
