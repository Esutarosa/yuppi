'use client';

import type { FC, HTMLAttributeAnchorTarget } from 'react';
import type { FormattedMessage } from '@/types/i18n';

import ThemeToggle from '@/components/common/ThemeToggle';
import NavMobile from '@/components/containers/NavBar/NavMobile';
import NavItem from '@/components/containers/NavBar/NavItem';
import GitHub from '@/components/icons/social/GitHub';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';

import style from './index.module.scss';

type NavBarProps = {
  navItems: Array<{
    name: FormattedMessage;
    href: string;
    key: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
  onThemeTogglerClick: () => void;
};

const NavBar: FC<NavBarProps> = ({
  navItems,
  onThemeTogglerClick,
}) => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Logo />
      </div>

      <div className={style.content}>
        <div className={style.navItems}>
          {navItems.map(({ name, href, key, target }) => (
            <NavItem key={key} href={href} target={target}>
              {name}
            </NavItem>
          ))}
        </div>

        <div className={style.actionsWrapper}>
          <Link
            className={style.github}
            href="https://github.com/Esutarosa/yuppi"
            aria-label="Yuppi Quize Github"
          >
            <GitHub />
          </Link>

          <ThemeToggle onClick={onThemeTogglerClick} />

          <NavMobile navMobileItems={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;