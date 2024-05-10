import type { FC } from 'react';
import Link from "next/link";

import { Button } from "@/components/ui/button";
import SectionContainer from '@/layouts/SectionContainer';
import Directions from '@/components/common/Directions';

const Hero: FC = () => {
  return (
    <SectionContainer className='overflow-hidden -mt-[2rem] md:-mt-[0]'>
      <div className='container px-4 overflow-hidden'>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
            <div className='flex flex-col items-center'>
              <h1 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl'>Yuppi Quizzes</h1>
              <p className='text-muted-foreground my-3 pt-2 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg'>Let's test your preparation and mental acuity with our quizzes, problems and tasks on frontend and related programming languages.</p>
            </div>
            <div className='flex items-center gap-2'>
              <Button asChild variant="default" className="bg-primary/75 text-foreground">
                <Link href="/quizzes" aria-label="Quizzes">Quizzes</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/discuss" aria-label="Discuss">Discuss</Link>
              </Button>
            </div>
            <div className="flex text-center flex-col items-center my-4 lg:mt-6">
              <small className="text-xs text-muted-foreground">
                Currently more than 10+ directions are supported
              </small>
              <Directions />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer >
  );
};

export default Hero;