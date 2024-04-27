import Image from "next/image"
import Link from "next/link"

const Logo = ({
  className
}: {
  className?: string
}) => {
  return (
    <Link href="/" className={className}>
      <Image src="/logo.svg" alt="Yuppi Logo" width={24} height={24} />
    </Link>
  )
}

export default Logo