import { cn } from '@/lib/utils';

export function H4({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h4 className={cn('scroll-m-20 text-5xl font-semibold tracking-tight', className)} {...props} />
  );
}
