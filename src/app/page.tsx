import type { FC } from 'react';

import WithHero from '@/components/withHero';
import WithProducts from '@/components/withProducts';

const Home: FC = () => {
  return (
    <main className='relative'>
      <WithHero />
      <WithProducts />
    </main>
  );
};

export default Home;