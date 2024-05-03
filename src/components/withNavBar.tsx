"use client";

import { useTheme } from 'next-themes';
import type { FC } from 'react';

import NavBar from '@/components/containers/Nav/NavBar';

import { QUIZE_CATEGORIES } from '@/config/navigation';

const WithNavBar: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleCurrentTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <header className='sticky top-0 z-50 min-w-[320px] w-full container border-b sm:border-none border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90'>
      <NavBar
        onThemeTogglerClick={toggleCurrentTheme}
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