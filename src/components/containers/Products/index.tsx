import type { FC } from 'react';

import SectionContainer from '@/layouts/SectionContainer';
import ProductCard from '@/components/containers/Products/ProductCard';
import GitHub from '@/components/icons/social/GitHub';

import { PRODUCTS_DATA as getProducts } from '@/data/getProductsCard';

const Products: FC = () => {
  return (
    <SectionContainer className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12'>
      {getProducts.map((data, index) => (
        <ProductCard
          key={data.label}
          className={
            index === 0 ? 'col-span-12 md:col-span-8 xl:col-span-6' :
              index === 1 ? 'col-span-12 md:col-span-4 xl:col-span-3' :
                index === 2 ? 'col-span-12 xl:col-span-3' :
                  index === 3 ? 'col-span-12 md:col-span-4 xl:col-span-3' :
                    index === 4 ? 'col-span-12 md:col-span-8  xl:col-span-9' :
                      'col-span-12 md:col-span-4 xl:col-span-3'
          }
          alignLeft={index === 0 || index === 4}
          url={data.product.url}
          title={data.product.title}
          subtitle={data.product.subtitle}
          icon={<GitHub />}
        />
      ))}
    </SectionContainer>
  );
};

export default Products;