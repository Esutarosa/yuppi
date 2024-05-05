import type { FC } from 'react';

const HeroTitle: FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl'>Yuppi Quizzes</h1>
      <p className='text-muted-foreground my-3 pt-2 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg'>Let's test your preparation and mental acuity with our quizzes, problems and tasks on frontend and related programming languages.</p>
    </div>
  );
};

export default HeroTitle;