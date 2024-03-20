import Image from "next/image"
import Link from "next/link"

const Logo = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={className}>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Yuppi Logo" width={32} height={32} />
        <span className="text-2xl">Yuppi</span>
      </Link>
    </div>
  )
}

export default Logo