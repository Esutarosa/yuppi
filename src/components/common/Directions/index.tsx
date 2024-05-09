import type { FC } from 'react';
import Link from 'next/link';

import { DIRECTION_ICONS as getDirections } from '@/data/getDirections';

const Directions: FC = () => {
  return (
    <div className='w-full sm:max-w-lg mt-4 lg:ml-0 flex flex-wrap items-center justify-center gap-2 xs:gap-4 sm:flex-nowrap'>
      {getDirections.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          aria-label={item.label}
          className='text-muted-foreground hover:text-accent-foreground transition-colors'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Directions;