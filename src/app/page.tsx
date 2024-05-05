import type { FC } from 'react';

import WithHero from '@/components/withHero';
import WithProducts from '@/components/withProducts';
import WithPopular from '@/components/withPopular';

const Home: FC = () => {
  return (
    <main className='relative min-h-screen'>
      <WithHero />
      <WithProducts />
      <WithPopular />
    </main>
  );
};

export default Home;