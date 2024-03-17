'use client'

import Logo from "./Logo"
import NavMenu from "./NavMenu"
import NavbarUserProfile from "./NavbarUserProfile"

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex items-center justify-between h-20 px-6">
        <div className="flex items-center">
          <NavMenu />
          <Logo className="mx-4" />
        </div>

        <div className="flex items-center">
          <NavbarUserProfile />
        </div>
      </div>
    </header>
  )
}

export default NavBar