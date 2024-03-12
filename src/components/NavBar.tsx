'use client'

import { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Search from "./Search";
import UserProfile from "./UserProfile";

const NavBar = async () => {
  return (
    <header className="flex items-center justify-between bg-slate-400 p-4">
      <Logo />
      <Search />
      <UserProfile />

      <nav className="fixed top-0 left-0 z-10">
        <NavMenu />
      </nav>
    </header>
  )
}

export default NavBar