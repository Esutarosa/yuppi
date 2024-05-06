import type { FC } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import SectionContainer from '@/layouts/SectionContainer';
import PopularCard from '@/components/containers/Popular/PopularCard';

import { POPULAR_DATA as getPopular } from '@/data/getPopular';

const Popular: FC = () => {
  return (
    <SectionContainer id='popular' className='md:pt-12 xl:pt-32'>
      <div className='text-center'>
        <h2 className='text-3xl'>Most Popular</h2>
        <p className='text-muted-foreground my-3 pt-2'>Try your hand at the most popular quizzes and problems now</p>
        <div className='flex justify-center gap-2 py-4'>
          <Button variant="secondary">
            <Link href="/" className='focus:outline-none'>
              View all quizzes
            </Link>
          </Button>

          <Button variant="outline">
            <Link href="/" className='focus:outline-none'>
              Check more problems
            </Link>
          </Button>
        </div>
      </div>

      <div className='mt-16 grid grid-cols-12 gap-5'>
        {getPopular.map((popular, index) => (
          <div
            key={index}
            className='col-span-12 lg:col-span-6 xl:col-span-4'
          >
            <PopularCard {...popular} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Popular;