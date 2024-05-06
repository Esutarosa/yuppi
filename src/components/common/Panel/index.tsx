import type { FC } from 'react';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface PanelProps {
  outerClassName?: string
  innerClassName?: string
};

const Panel: FC<PropsWithChildren<PanelProps>> = ({
  outerClassName,
  innerClassName,
  children,
}) => {
  return (
    <div className={cn(
      'relative border border-border rounded-xl bg-card transition-all flex items-center justify-center',
      outerClassName
    )}>
      <div className={cn(
        'relative z-10 w-full h-full rounded-xl bg-card overflow-hidden text-foreground',
        innerClassName
      )}>
        {children}
        <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20" />
      </div>
    </div>
  );
};

export default Panel;