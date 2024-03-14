'use client'

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavMenu = () => {

  const [isActive, setIsActive] = useState<boolean>(false)
  const navMenuRef = useRef<HTMLDivElement>(null)

  const closeMenuOnClick = () => setIsActive(false)
  const toggleMenu = () => setIsActive((prev) => !prev)

  useOnClickOutside(navMenuRef, closeMenuOnClick)

  return (
    <>
      <div
        ref={navMenuRef}
        onClick={toggleMenu}
        className="bg-muted rounded-md cursor-pointer select-none z-50"
      >
        <div
          className={cn(
            "w-10 h-10 flex items-center justify-center transition-transform duration-500",
            isActive ? "transform rotate-0" : "transform rotate-180"
          )}
        >
          {isActive ? (
            <IoIosClose className="cursor-pointer text-3xl" />
          ) : (
            <IoIosMenu className="cursor-pointer text-2xl" />
          )}
        </div>
      </div>

      <AnimatePresence mode="wait" >
        {isActive && <NavLinks onClick={closeMenuOnClick} />}
      </AnimatePresence>
    </>
  )
}

export default NavMenu