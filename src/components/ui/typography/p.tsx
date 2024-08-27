import { cn } from '@/lib/utils';
import React from 'react';

export const P = React.forwardRef<
  HTMLParagraphElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(function PWithoutRef({ className, ...props }, ref) {
  return <p ref={ref} className={cn('text-4xl leading-10 [&:not(:first-child)]:mt-6', className)} {...props} />;
});
