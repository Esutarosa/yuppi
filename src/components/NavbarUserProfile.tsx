'use client'

import Link from "next/link"
import { NAVBAR_LINKS_USER } from "@/lib/constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { CiUser } from "react-icons/ci";

const NavbarUserProfile = () => {

  const session = true

  return (
    <>
      {session ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <Avatar className="w-12 h-12 select-none">
                <AvatarImage src="https://avatars.githubusercontent.com/u/107695658?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>
                {/* {session.user} */}
                User
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              {NAVBAR_LINKS_USER.find(item => item.title === 'Profile')?.data.map((item) => (
                <DropdownMenuItem key={item.key}>
                  <Link href={item.path}>
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuItem
                className="cursor-pointer"
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link
          href="/sign-in"
          title="Sign in"
          className="flex items-center justify-center h-12 w-12 bg-muted overflow-hidden rounded-full transition duration-300 hover:bg-muted/80"
        >
          <CiUser className="text-3xl" />
        </Link>
      )}
    </>
  )
}

export default NavbarUserProfile