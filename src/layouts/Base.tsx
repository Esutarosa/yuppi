'use client';

import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

import WithNavBar from '@/components/withNavBar';
import WithFooter from '@/components/withFooter';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(
      'min-w-[320px] min-h-screen bg-background antialiased',
    )}>
      <WithNavBar />

      <main className='container'>
        {children}
      </main>

      <WithFooter />
    </div>
  );
};

export default BaseLayout;