'use client'

import Logo from "./Logo"
import NavMenu from "./NavMenu"
import UserProfile from "./UserProfile"

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex items-center justify-between h-20 px-6">
        <div className="flex items-center">
          <NavMenu />
          <Logo className="mx-4" />
        </div>

        <div className="flex items-center">
          <UserProfile />
        </div>
      </div>
    </header>
  )
}

export default NavBar