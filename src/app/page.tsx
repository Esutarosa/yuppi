import type { FC } from 'react';

import WithHero from '@/components/withHero';

const Home: FC = () => {
  return (
    <main className='relative'>
      <WithHero />
    </main>
  );
};

export default Home;