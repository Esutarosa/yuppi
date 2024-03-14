import Link from "next/link"

const Logo = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={className}>
      <Link href="/" className="mx-2">
        <span className="text-xl">Yuppi</span>
      </Link>
    </div>
  )
}

export default Logo