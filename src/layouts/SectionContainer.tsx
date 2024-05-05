import type { FC } from 'react';

import { Ref, forwardRef, HTMLProps } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SectionContainer: FC<SectionContainerProps> = forwardRef((
  {
    children,
    className,
    id
  },
  ref: Ref<HTMLDivElement>
) => {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'container relative mx-auto py-8',
        className
      )}
    >
      {children}
    </section>
  );
});

export default SectionContainer;