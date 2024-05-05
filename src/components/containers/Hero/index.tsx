import type { FC } from 'react';

import HeroTitle from './HeroTitle';
import HeroButtons from './HeroButtons';
import HeroSupported from './HeroSupported';

const Hero: FC = () => {
  return (
    <section className='relative'>
      <div className='container px-4 overflow-hidden'>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
            <HeroTitle />
            <HeroButtons />
            <HeroSupported />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;