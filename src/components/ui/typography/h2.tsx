import { cn } from '@/lib/utils';

export function H2({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h2 className={cn('scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0', className)} {...props} />
  );
}
