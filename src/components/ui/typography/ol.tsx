import { cn } from '@/lib/utils';

export function OL({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>) {
  return (
    <ol className={cn('block my-6 ml-6 list-disc [&>li::marker]:text-orange-300 [&>li]:mt-2 text-4xl', className)} {...props} />
  );
}




