import Link from "next/link"

const Logo = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={className}>
      <Link href="/">
        <span className="text-2xl">Yuppi</span>
      </Link>
    </div>
  )
}

export default Logo