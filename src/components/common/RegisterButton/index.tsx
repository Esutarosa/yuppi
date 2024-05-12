import type { FC } from 'react';
import Link from 'next/link';

import HoverBorderGradient from '@/components/common/RegisterButton/HoverBorderGradient';

const RegisterButton: FC = () => {
  return (
    <Link
      href='/register'
      className='mx-2 flex justify-center text-center'
    >
      <HoverBorderGradient
        containerClassName='rounded-full'
        as='button'
        className="bg-background text-foreground flex items-center space-x-2"
      >
        <small>Start with account!</small>
      </HoverBorderGradient>
    </Link>
  );
};

export default RegisterButton;