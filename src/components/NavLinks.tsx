import { NAVBAR_LINKS } from "@/lib/constants"
import Link from "next/link"

const NavLinks = () => {
  return (
    <div className="flex flex-col gap-10 py-4">
      {NAVBAR_LINKS.map((item) => (
        <div key={item.title} className="flex flex-col gap-4">
          <h3 className="font-bold leading-none tracking-wide text-accent-foreground/40 uppercase px-6">
            {item.title}
          </h3>

          <ul className="flex flex-col">
            {item.data.map((item) => (
              <li key={item.key} className="text-accent-foreground hover:bg-accent">
                <Link href={item.path} className="flex items-center text-md pl-6 py-2 pr-12">
                  {item.icon && <item.icon className="w-6 h-6 mr-2" />}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default NavLinks