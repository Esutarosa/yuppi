import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

const UserProfile = () => {

  const session = true

  return (
    <>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/107695658?v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>

  )
}

export default UserProfile