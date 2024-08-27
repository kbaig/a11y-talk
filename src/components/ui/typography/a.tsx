import { cn } from '@/lib/utils';

export interface AProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  external?: boolean;
}

export function A({ external = false, className, ...props }: AProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      className={cn('text-orange-300 hover:text-orange-400 hover:underline', className)}
      {...externalProps}
      {...props}
    />
  );
}
