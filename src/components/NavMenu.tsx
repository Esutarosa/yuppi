'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const NavMenu = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div onClick={() => setIsActive(!isActive)}>
        <div className={cn(
          "w-10 h-10 flex items-center justify-center cursor-pointer select-none",
          isActive ? "" : ""
        )}>
          {isActive ? (
            <IoIosClose className="cursor-pointer text-3xl" />
          ) : (
            <IoIosMenu className="cursor-pointer text-3xl" />
          )}
        </div>
      </div>
    </>
  )
}

export default NavMenu