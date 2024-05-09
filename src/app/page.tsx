import type { FC } from 'react';

import WithHero from '@/components/withHero';
import WithPopular from '@/components/withPopular';

const Home: FC = () => {
  return (
    <>
      <WithHero />
      <WithPopular />
    </>
  );
};

export default Home;