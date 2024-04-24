import type { FC } from 'react';
import NavBar from '@/components/containers/NavBar';

import { QUIZE_CATEGORIES } from '@/config/navigation';

const WithNavBar: FC = () => {
  return (
    <header className='sticky top-0 z-50 min-w-[320px] w-full container border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90'>
      <NavBar
        navItems={QUIZE_CATEGORIES.map(({ name, href, key }) => ({
          name,
          href,
          key,
        }))}
      />
    </header>
  );
};

export default WithNavBar;