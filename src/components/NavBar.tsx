import Logo from "./Logo"
import NavMenu from "./NavMenu"
import Search from "./Search"
import UserProfile from "./UserProfile"

const NavBar = async () => {
  return (
    <header className="fixed top-0 z-50 w-full px-[2rem] shadow border-b border-border/80 bg-background lg:py-[1rem]">
      <div className="flex items-center justify-between h-[3.75rem]">
        <UserProfile className="lg:pl-[8rem]" />
        <Logo className="hidden" />
        <Search />
        <NavMenu />
      </div>
    </header>
  )
}

export default NavBar