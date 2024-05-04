import type { FC, PropsWithChildren } from 'react';

import WithNavBar from '@/components/withNavBar';
import WithFooter from '@/components/withFooter';

const DiscussLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <WithNavBar />

    <main>
      {children}
    </main>

    <WithFooter />
  </>

);

export default DiscussLayout;
