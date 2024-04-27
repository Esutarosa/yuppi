import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';

import type { FC } from 'react';

const Home: FC = () => {
  return (
    <main>
      <WithNavBar />

      <WithFooter />
    </main>
  );
};

export default Home;