import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import SectionContainer from '@/layouts/SectionContainer';
import PopularCard from '@/components/containers/Popular/PopularCard';

import { POPULAR_DATA as getPopular } from '@/data/getPopularCard';

const Popular: FC = () => {
  return (
    <SectionContainer id='popular' className='-mt-6'>
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