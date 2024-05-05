import { Button } from '@/components/ui/button';
import SectionContainer from '@/layouts/SectionContainer';
import Link from 'next/link';
import type { FC } from 'react';

const Popular: FC = () => {
  return (
    <SectionContainer id='popular' classID='xl:pt-32'>
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
    </SectionContainer>
  );
};

export default Popular;