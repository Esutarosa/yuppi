'use client'

import { useState } from "react"
import { cn } from "@/lib/utils";
import "@/styles/navbar.scss";
import { AnimatePresence } from 'framer-motion';
import NavLinks from "./NavLinks";

const NavMenu = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div
        className="w-16 h-16 rounded-full cursor-pointer flex items-center justify-center"
        onClick={() => { setIsActive(!isActive) }}
      >
        <div className={cn("w-full burger-menu", isActive ? "burger-menu-active" : "")}></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <NavLinks />}
      </AnimatePresence>
    </>
  )
}

export default NavMenu