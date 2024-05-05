import type { FC } from 'react';

import SectionContainer from '@/layouts/SectionContainer';
import ProductCard from '@/components/containers/Products/ProductCard';
import GitHub from '@/components/icons/social/GitHub';

const Products: FC = () => {
  return (
    <SectionContainer className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12'>
      <ProductCard
        className="col-span-12 md:col-span-8 xl:col-span-6"
        alignLeft
        url="/"
        title="Yuppi"
        subtitle="An easy-to-use React library for building forms and data validation"
        icon={<GitHub />}
      />

      <ProductCard
        className="col-span-12 md:col-span-4 xl:col-span-3"
        url="/"
        title="Yuppi"
        subtitle="An easy-to-use React library for building forms and data validation"
        icon={<GitHub />}
      />

      <ProductCard
        className="col-span-12 xl:col-span-3"
        url="/"
        title="Yuppi"
        subtitle="An easy-to-use React library for building forms and data validation"
        icon={<GitHub />}
      />

      <ProductCard
        className="col-span-12 md:col-span-4  xl:col-span-3"
        url="/"
        title="Yuppi"
        subtitle="An easy-to-use React library for building forms and data validation"
        icon={<GitHub />}
      />

      <ProductCard
        className="col-span-12 md:col-span-8  xl:col-span-9"
        alignLeft
        url="/"
        title="Yuppi"
        subtitle="Enhance your programming abilities by engaging in a variety of bite-sized exercises designed to test and improve your proficiency."
        icon={<GitHub />}
      />
    </SectionContainer>
  );
};

export default Products;