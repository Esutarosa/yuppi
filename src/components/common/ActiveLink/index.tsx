'use client';

import classNames from 'classnames';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';

type ActiveLocalizedLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  allowSubPath?: boolean;
};

const ActiveLink: FC<ActiveLocalizedLinkProps> = ({
  children,
  activeClassName = 'active',
  allowSubPath = false,
  className,
  href = '',
  ...props
}) => {
  const pathname = usePathname();

  const finalClassName = classNames(className, {
    [activeClassName]: allowSubPath
      ? pathname.startsWith(`/${href.toString().split('/')[1]}`)
      : href.toString() === pathname,
  });

  return (
    <Link className={finalClassName} href={href} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
