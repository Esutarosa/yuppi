'use client'

import Logo from "./Logo"
import NavMenu from "./NavMenu"

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center px-6">
          <NavMenu />
          <Logo className="mx-4" />
        </div>
      </div>
    </header>
  )
}

export default NavBar