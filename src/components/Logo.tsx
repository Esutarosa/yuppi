import Link from "next/link"

const Logo = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={className}>
      <Link href="/" className="">
        <span className="">Yuppi</span>
      </Link>
    </div>
  )
}

export default Logo