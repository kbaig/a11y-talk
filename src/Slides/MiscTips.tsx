import { ChevronDownIcon } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { toast } from 'sonner';

import { InlineCode } from '@/components/InlineCode';
import { ProfileForm } from '@/components/Profile';
import { Slide } from '@/components/Slide';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { ChartConfig } from '@/components/ui/chart';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { A } from '@/components/ui/typography/a';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';
import { OL } from '@/components/ui/typography/ol';
import { P } from '@/components/ui/typography/p';

import Chicago from '@/img/chicago.jpg';

interface MiscTipsProps {
  skipLinkTargetRef: React.RefObject<HTMLParagraphElement>;
}

export function MiscTips({ skipLinkTargetRef }: MiscTipsProps) {
  return (
    <>
      <Slide>
        <H2>Useful techniques</H2>
      </Slide>

      <Slide>
        <H3>Visually hidden</H3>

        <P className='sr-only'>I'm hidden!</P>
      </Slide>

      <Slide>
        <H3>Skip links</H3>

        <P ref={skipLinkTargetRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
          lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue
          eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
        </P>
      </Slide>

      <Slide>
        <H3 className='mb-6'>Visually hidden input</H3>

        <VisuallyHiddenInputExample />
      </Slide>

      <Slide>
        <H3>Link overlay</H3>

        <LinkOverlayExample />
      </Slide>

      <Slide>
        <H3>Roving tabindex</H3>

        <div className='fragment'>
          <div className='my-6'>
            <A href='https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/' external>
              Roving tabindex on WAI-ARIA
            </A>

            <RovingTabindexExample />
          </div>
        </div>
      </Slide>

      <Slide>
        <H2>Common pitfalls</H2>
      </Slide>

      <Slide>
        <H3 className='text-left'>
          Anchors that look like buttons<span className='fragment'>, buttons that look like anchors</span>
          <span className='fragment'>, divs that look and act like buttons</span>
          <span className='fragment'>, and buttons that make choices</span>
        </H3>

        <OL>
          <li className='fragment'>
            Markup is to <i>mark content up</i>
          </li>
          <li className='fragment'>
            If it changes the view, which also means the route should change, it's an <InlineCode>a</InlineCode>
          </li>
          <li className='fragment'>
            If you pick a choice, it's an <InlineCode>{`<input type='radio'>`}</InlineCode>
          </li>
          <li className='fragment'>
            If you click it to do something another interactive element does not provide, it's a{' '}
            <InlineCode>button</InlineCode>
          </li>
          <li className='fragment'>
            Reasons to throw an <InlineCode>onClick</InlineCode> on a <InlineCode>div</InlineCode> are few and far
            between. Carefully remove styles from a <InlineCode>button</InlineCode> if needed
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>Heading order abuse</H3>

        <OL className='mt-6'>
          <li className='fragment'>
            Use headings as a hierarchical breakdown, not for styles{' '}
            <span className='fragment'>(btw use a style reset)</span>
          </li>
          <li className='fragment'>Think of heading and landmark elements as the table of contents</li>
          <li className='fragment'>Don't skip heading levels!</li>
          <li className='fragment'>
            This can be hard with heavily componentized systems
            <span className='fragment'>
              . Use an <InlineCode>as</InlineCode> prop
            </span>
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>Anchor tag content</H3>

        <div className='mt-6 flex flex-col gap-8 text-left text-4xl'>
          <div className='fragment'>
            <div className='mb-2'>Bad - unsemantic anchor content</div>
            <div>
              <P className='mt-0 text-3xl'>
                Click{' '}
                <A href='https://react.dev/' external>
                  here
                </A>{' '}
                to go to the React docs!
              </P>
            </div>
          </div>

          <div className='fragment'>
            <div className='mb-2'>Good - semantic anchor content</div>
            <div>
              <P className='mt-0 text-3xl'>
                Visit the{' '}
                <A href='https://react.dev/' external>
                  React docs
                </A>{' '}
                to learn more!
              </P>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <H3>Icon buttons</H3>

        <IconButtonsExample />
      </Slide>

      <Slide>
        <H3>Alt tags for images</H3>

        <div className='mt-6 flex flex-col gap-8 text-4xl'>
          <div className='fragment flex flex-col items-center'>
            <div className='mb-4'>Bad - unsemantic anchor content</div>

            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className='size-40 rounded-md inline-block object-cover' src={Chicago} />
          </div>
        </div>
      </Slide>

      <Slide>
        <div className='flex flex-col gap-8 text-4xl'>
          <div>
            <div className='mb-4'>Okay - Presentational roles</div>

            <div className='flex justify-center gap-10'>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img className='size-40 rounded-md inline-block object-cover' src={Chicago} role='none' />

              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img className='size-40 rounded-md inline-block object-cover' src={Chicago} role='presentation' />
            </div>
          </div>

          <div className='fragment flex flex-col items-center'>
            <div className='mb-4'>
              Okay - null <InlineCode>alt</InlineCode> tag (presentational only)
            </div>

            <img className='size-40 rounded-md inline-block object-cover' src={Chicago} alt='' />
          </div>
        </div>
      </Slide>

      <Slide>
        <div className='flex flex-col gap-8 text-4xl'>
          <div className='flex flex-col items-center'>
            <div className='mb-4'>
              Better - descriptive <InlineCode>alt</InlineCode> tag
            </div>

            <img className='size-40 rounded-md inline-block object-cover' src={Chicago} alt='The Chicago skyline' />
          </div>

          <div className='fragment flex flex-col items-center'>
            <div className='mb-4'>
              Ideal - visible label with <InlineCode>aria-labelledby</InlineCode>
            </div>

            <img
              className='size-40 rounded-md inline-block object-cover'
              src={Chicago}
              aria-labelledby='chicago-img-label'
            />
            <div id='chicago-img-label' className='text-2xl mt-2'>
              The Chicago skyline
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <H3 className='mb-6'>Alternative data for charts</H3>

        <ChartDataExample />
      </Slide>

      <Slide>
        <H3>Live regions and alert role</H3>

        <div className='mt-6 fragment'>
          <AlertDemo />
        </div>
      </Slide>

      <Slide>
        <H3 className='mb-6'>
          Using <InlineCode>px</InlineCode>, <InlineCode>em</InlineCode>, or <InlineCode>rem</InlineCode> exclusively
        </H3>

        <P className='fragment'>
          <A href='https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html' external>
            WCAG 2.2 SC 1.4.4 Resize Text
          </A>{' '}
          says your app should still be usable at 200% scaling. You should try to support as high a number as you can.
        </P>

        <OL>
          <li className='fragment'>
            <InlineCode>em</InlineCode> and <InlineCode>rem</InlineCode> scale with browser-level font size,{' '}
            <InlineCode>px</InlineCode> does not<span className='fragment'>. Zoom affects everything</span>
          </li>
          <li className='fragment'>
            Think about how you want different elements to scale. Sometimes it's a judgement call
          </li>
        </OL>
      </Slide>

      <Slide>
        <H3>Modal focus</H3>

        <P className='fragment my-6'>
          Shift focus onto first logical interactive element and lock focus into modal while open
        </P>

        <ModalFocusExample />
      </Slide>

      <Slide>
        <H3>Form names</H3>

        <P>
          Similar to images and buttons, give forms a name. Ideally a visible one with{' '}
          <InlineCode>aria-labelledby</InlineCode>, but one using the visually hidden technique or{' '}
          <InlineCode>aria-label</InlineCode> is much better than nothing.
        </P>
      </Slide>

      <Slide>
        <H3>Disabled form buttons</H3>
      </Slide>

      <Slide>
        <H3>Disabled when invalid</H3>

        <div className='fragment'>
          <ProfileForm disableWhenInvalid />
        </div>
      </Slide>

      <Slide>
        <H3>Always enabled</H3>

        <div className='fragment'>
          <ProfileForm disableWhenInvalid={false} />
        </div>
      </Slide>
    </>
  );
}

const values = ['Comfortable', 'Default', 'Compact'];

function VisuallyHiddenInputExample() {
  const [value, setValue] = React.useState('1');

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      role='radiogroup'
      className='fragment flex flex-col gap-4'
      onKeyDown={(e) => {
        e.stopPropagation();
      }}
    >
      {values.map((v) => (
        <div key={v}>
          <input
            id={`option-${v}`}
            checked={value === v}
            className='sr-only'
            type='radio'
            value={v}
            onChange={() => {
              setValue(v);
            }}
          />

          <div className='flex items-center space-x-2'>
            <button
              className='aspect-square size-6 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
              onClick={() => {
                setValue(v);
              }}
            >
              <span className='flex items-center justify-center'>
                {value === v && (
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5 fill-primary'
                  >
                    <path
                      d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
                      fill='currentColor'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </span>
            </button>

            <label
              className='text-2xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor={`option-${v}`}
            >
              {v}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

function LinkOverlayExample() {
  return (
    <Card className='fragment mt-6 mx-auto max-w-[80%] relative'>
      <CardHeader>
        <CardTitle>
          <a
            href='https://v2.chakra-ui.com/docs/components/link-overlay'
            target='_blank'
            rel='noopener noreferrer'
            className='before:content-[""] static before:cursor-inherit before:block before:absolute before:top-0  before:left-0 before:z-0 before:w-full before:h-full before:box-border before:transition before:ease-in-out before:hover:bg-purple-900 before:opacity-20'
          >
            New Year, New Beginnings: Smashing Workshops &amp; Audits
          </a>
        </CardTitle>

        <CardDescription>
          <time dateTime='2021-01-15 15:30:00 +0000 UTC'>13 days ago</time>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p>
          Catch up on what&apos;s been cookin&apos; at Smashing and explore some of the most popular community
          resources.
        </p>
      </CardContent>

      <CardFooter>
        <A href='https://kazbaig.com' external className='relative z-[1]'>
          About the author
        </A>
      </CardFooter>
    </Card>
  );
}

function RovingTabindexExample() {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onKeyDown={(e) => {
        e.stopPropagation();
      }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function IconButtonsExample() {
  return (
    <div className='mt-6 flex flex-col gap-8 text-4xl'>
      <div className='fragment flex flex-col gap-2'>
        <div>Visible image, no label</div>

        <div>
          <Button variant='outline' size='icon'>
            <ChevronDownIcon className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div className='fragment flex flex-col gap-2'>
        <div>
          Better - hidden image + labeled with <InlineCode>aria-label</InlineCode>
        </div>

        <div>
          <Button variant='outline' size='icon' aria-label='Expand'>
            <ChevronDownIcon className='h-4 w-4' aria-hidden />
          </Button>
        </div>
      </div>

      <div className='fragment flex flex-col gap-2'>
        <div>Even better - hidden image + visually hidden label</div>

        <div>
          <Button variant='outline' size='icon' aria-label='Expand'>
            <span className='sr-only'>Expand</span> <ChevronDownIcon className='h-4 w-4' aria-hidden />
          </Button>
        </div>
      </div>

      <div className='fragment flex flex-col gap-2'>
        <div>
          Ideal when possible - hidden image + <InlineCode>aria-labelledby</InlineCode>
        </div>

        <div className='flex gap-2 justify-center items-center '>
          <span id='expand-button-label' className='text-3xl'>
            Expand
          </span>

          <Button variant='outline' size='icon' aria-labelledby='expand-button-label'>
            <ChevronDownIcon className='h-4 w-4' aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ModalFocusExample() {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span
      onKeyDown={(e) => {
        e.stopPropagation();
      }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button className='fragment' variant='outline'>
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' value='Pedro Duarte' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input id='username' value='@peduarte' className='col-span-3' />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </span>
  );
}

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

function ChartDataExample() {
  const [showChart, setShowChart] = React.useState(true);

  return (
    <div className='fragment'>
      <div className='mb-4'>
        <Button onClick={() => setShowChart((prev) => !prev)}>Show {showChart ? 'table' : 'chart'}</Button>
      </div>

      <div className='flex justify-center' aria-live='polite'>
        {showChart ?
          <Card className='max-w-[50dvh] w-[50%]'>
            <CardHeader>
              <CardTitle id='chart-title' className='text-xl'>
                Events by device
              </CardTitle>
              <CardDescription className='text-lg'>January - June 2024</CardDescription>
            </CardHeader>

            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='month'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />

                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
                  <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
                  <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>

            <CardFooter className='flex-col items-start gap-2 text-sm'>
              <div className='flex gap-2 font-medium leading-none'>
                Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
              </div>
              <div className='leading-none text-muted-foreground'>Showing total visitors for the last 6 months</div>
            </CardFooter>
          </Card>
        : <Table className='text-sm max-w-[50%]'>
            <TableCaption>
              <CardTitle id='chart-title' className='text-xl'>
                Events by device
              </CardTitle>
              <CardDescription className='text-lg'>January - June 2024</CardDescription>
            </TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead className='text-right'>Desktop</TableHead>
                <TableHead className='text-right'>Mobile</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {chartData.map(({ month, desktop, mobile }) => (
                <TableRow key={month}>
                  <TableCell>{month}</TableCell>
                  <TableCell className='text-right'>{desktop}</TableCell>
                  <TableCell className='text-right'>{mobile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
    </div>
  );
}

export function AlertDemo() {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => {},
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
