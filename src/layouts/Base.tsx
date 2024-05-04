'use client';

import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(
      'relative min-w-[320px] min-h-screen bg-background antialiased',
    )}>
      {children}
    </div>
  );
};

export default BaseLayout;
