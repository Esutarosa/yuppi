'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "framer-motion";

const NavMenu = () => {

  const [isActive, setIsActive] = useState<boolean>(false)

  const closeMenuOnClick = () => window.innerWidth <= 1024 ? setIsActive(false) : null
  const toggleMenu = () => setIsActive((prev) => !prev)

  return (
    <>
      <div
        onClick={toggleMenu}
        className="bg-muted rounded-md cursor-pointer select-none z-50"
      >
        <div className={cn("w-10 h-10 flex items-center justify-center")}>
          <IoIosMenu className="text-2xl" />
        </div>
      </div>

      <AnimatePresence >
        {isActive && <NavLinks onClick={closeMenuOnClick} />}
      </AnimatePresence>
    </>
  )
}

export default NavMenu