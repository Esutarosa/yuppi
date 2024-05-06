import type { FC } from 'react';

import { cn } from '@/lib/utils';

import Link from 'next/link';

import Panel from '@/components/common/Panel';

interface ProductCardProps {
  title: string
  subtitle: string | React.ReactNode
  url: string
  icon: React.ReactNode
  image?: string
  className?: string
  alignLeft?: boolean
};

const ProductCard: FC<ProductCardProps> = ({
  className,
  title,
  subtitle,
  icon,
  image,
  url,
  alignLeft = false,
}) => {
  return (
    <Link
      href={url}
      className={cn(
        'group relative w-full h-[300px] flex flex-col gap-5 lg:flex-row focus:rounded-xl',
        className
      )}
    >
      <Panel
        outerClassName='relative w-full h-full'
        innerClassName='relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between w-full rounded-xl h-full'
      >
        <div className={cn(
          'relative z-10 flex flex-col lg:h-full gap-1 text-foreground mx-auto items-center text-center h-full px-6 py-8',
          alignLeft && 'lg:mx-0 lg:pl-8 lg:items-start lg:text-left lg:max-w-[320px]'
        )}>
          <div className='flex items-center justify-center h-12 w-12 bg-muted dark:bg-background text-primary rounded-lg mb-3'>{icon}</div>
          <h2 className='text-xl'>{title}</h2>
          <div className='flex-1 flex flex-col justify-between gap-2'>
            <p className='text-sm text-foreground'>{subtitle}</p>
          </div>
        </div>
        {image && image}
      </Panel>
    </Link>
  );
};

export default ProductCard;