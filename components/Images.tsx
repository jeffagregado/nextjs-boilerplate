import Image from 'next/image'
import setClassNames from 'classnames'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

const Images = ({ src, alt, width, height }: Props) => {
  return (
    <div
      className={setClassNames(
        'relative',
        // width ? `w-[${width}]` : 'w-full',
        // height ? `h-[${height}]` : 'h-full'
      )}
    >
      <Image src={src} alt={alt} layout="fill" />
    </div>
  )
}

export default Images
