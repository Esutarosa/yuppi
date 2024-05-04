'use client';

import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';
import type { FC, PropsWithChildren } from 'react';

const QuizesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <WithNavBar />

      <main>
        {children}
      </main>

      <WithFooter />
    </>
  );
};

export default QuizesLayout;
