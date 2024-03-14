'use client'

import Logo from "./Logo"
import NavMenu from "./NavMenu"

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center">
          <NavMenu />
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default NavBar