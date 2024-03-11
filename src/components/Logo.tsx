import Link from "next/link"

const Logo = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={className}>
      <Link href="/" className="flex items-center text-3xl font-semibold text-primary">
        <p>Yuppi</p>
      </Link>
    </div>
  )
}

export default Logo