import Logo from "./Logo"
import NavLinks from "./NavLinks"

const NavMenu = () => {
  return (
    <>
      <button>NavMenu</button>

      <div className="fixed top-0 left-0 h-screen shadow bg-card border-r border-border/80 transition duration-300 bg-transition">
        <nav className="h-full overflow-y-scroll no-scrollbar">
          <Logo className="px-6 py-4 lg:py-6" />
          <NavLinks />
        </nav>
      </div>
    </>
  )
}

export default NavMenu