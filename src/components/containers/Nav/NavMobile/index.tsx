import type { FC, HTMLAttributeAnchorTarget } from 'react';
import type { FormattedMessage } from '@/types/i18n';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItem from '@/components/containers/Nav/NavItem';
import Hamburger from '@heroicons/react/24/solid/Bars3Icon';

import style from './index.module.scss';

type NavMobileProps = {
  navMobileItems: Array<{
    name: FormattedMessage;
    href: string;
    key: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
};

const NavMobile: FC<NavMobileProps> = ({ navMobileItems }) => {
  return (
    <Sheet>
      <SheetTrigger className='flex sm:hidden'>
        <Hamburger className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side="top">
        <div className={style.navMobileItems}>
          {navMobileItems.map(({ name, href, key, target }) => (
            <NavItem
              key={key}
              href={href}
              target={target}
              className={style.navMobileItem}
            >
              {name}
            </NavItem>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;