import setClassNames from 'classnames'
import Image from 'next/image'

interface Props {
  className?: string
  src?: string
  alt?: string
  url?: string
}

// Please source the image from public folder
// i.e: /image.png => /public/image.png
const Logo = ({ className, src, alt, url }: Props) => {
  return (
    <div
      className={setClassNames(
        'relative cursor-pointer',
        className && className
      )}
    >
      <a href={url ? url : '#'}>
        {src ? (
          <Image src={src} alt={alt} layout="fill" />
        ) : (
          <h1 className="text-xl font-bold">Logo</h1>
        )}
      </a>
    </div>
  )
}

export default Logo
