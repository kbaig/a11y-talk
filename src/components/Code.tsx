import { cn } from '@/lib/utils';

export interface CodeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  codeProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

export const Code = ({ codeProps, className, children, ...props }: CodeProps) => {
  return (
    <pre className={cn('my-8 mx-auto', className)} {...props}>
      <code className={cn('language-javascript text-[0.55em] leading-[1.3] ', codeProps?.className)} {...codeProps}>
        {children}
      </code>
    </pre>
  );
};
