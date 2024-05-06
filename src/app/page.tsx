import type { FC } from 'react';

import WithHero from '@/components/withHero';
import WithProducts from '@/components/withProducts';
import WithPopular from '@/components/withPopular';

const Home: FC = () => {
  return (
    <>
      <WithHero />
      <WithProducts />
      <WithPopular />
    </>
  );
};

export default Home;