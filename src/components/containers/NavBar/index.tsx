'use client';

import type { FC, HTMLAttributeAnchorTarget } from 'react';
import type { FormattedMessage } from '@/types/i18n';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItem from '@/components/containers/NavBar/NavItem';
import GitHub from '@/components/icons/social/GitHub';
import Link from 'next/link';

import style from './index.module.scss';

type NavBarProps = {
  navItems: Array<{
    name: FormattedMessage;
    href: string;
    key: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
};

const NavBar: FC<NavBarProps> = ({
  navItems,
}) => {
  return (
    <nav className={`${style.nav}`}>
      {/* Here should be mobiel menu in the fuater */}

      <div className={style.main}>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;