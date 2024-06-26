'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import type { FC, MouseEvent } from 'react';

import styles from './index.module.scss';

type ThemeToggleProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ onClick = () => { } }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.themeToggle}
      aria-label="Theme Toggle"
    >
      <MoonIcon className="block dark:hidden" height="20" />
      <SunIcon className="hidden dark:block" height="20" />
    </button>
  );
};

export default ThemeToggle;