'use client'

import { forwardRef, useRef } from 'react';
import { motion } from 'framer-motion';
import { NAVBAR_LINKS } from '@/lib/constants';
import Link from 'next/link';
import Logo from './Logo';

const menuSlide = {
  initial: { x: "calc(-100%)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(-100%)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const NavLinks = ({
  onClick: closeMenuOnClick
}: {
  onClick: () => void
}) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 left-0 h-screen border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <Logo className='h-20 flex items-center ml-20' />
      <div className='flex flex-col gap-10 mt-4'>
        {NAVBAR_LINKS.map((item) => (
          <div key={item.title} className="w-fulll flex flex-col gap-4">
            <h3 className="font-bold leading-none tracking-wide text-accent-foreground/40 uppercase px-6">
              {item.title}
            </h3>
            <ul className="flex flex-col">
              {item.data.map((item) => (
                <li key={item.key} className="text-accent-foreground hover:bg-accent">
                  <Link
                    onClick={closeMenuOnClick}
                    href={item.path}
                    className="flex items-center text-md px-6 py-2 pr-32"
                  >
                    {item.icon && <item.icon className="w-6 h-6 mr-2" />}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default NavLinks