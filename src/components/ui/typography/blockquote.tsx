import { cn } from '@/lib/utils';

export function Blockquote({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) {
  return <blockquote className={cn("mt-6 border-l-2 pl-6 text-4xl leading-10 italic", className)} {...props} />;
}
