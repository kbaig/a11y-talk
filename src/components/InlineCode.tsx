import { cn } from '@/lib/utils';

export const InlineCode = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <code
      className={cn(
        'bg-gray-900 rounded-lg p-0.5 inline-block text-2xl text-orange-400 transform -translate-y-1',
        className,
      )}
      {...props}
    />
  );
};
