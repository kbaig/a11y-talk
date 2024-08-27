import { cn } from '@/lib/utils';

export function H1({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h1 className={cn('scroll-m-20 text-7xl font-bold tracking-tight', className)} {...props} />;
}
