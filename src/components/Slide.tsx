interface SlideProps {
  children: React.ReactNode;
}
export function Slide({ children }: SlideProps) {
  return <section>{children}</section>;
}
