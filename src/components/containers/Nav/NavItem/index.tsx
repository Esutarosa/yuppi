import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

import ActiveLink from '@/components/common/ActiveLink';

import styles from './index.module.scss';

type NavItemType = 'nav' | 'footer';

type NavItemProps = {
  href: string;
  type?: NavItemType;
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  href = '',
  type = 'nav',
  className,
  target,
  children,
}) => {
  return (
    <ActiveLink
      href={href}
      className={classNames(styles.item, styles[type], className)}
      activeClassName={styles.active}
      allowSubPath={href.startsWith('/')}
      target={target}
    >
      <span className={styles.label}>{children}</span>

      {((type === 'nav' && href.startsWith('http')) || target === '_blank') && (
        <ArrowUpRightIcon className={styles.icon} />
      )}
    </ActiveLink>
  )
}

export default NavItem