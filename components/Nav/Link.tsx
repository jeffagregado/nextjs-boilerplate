import { ReactNode } from 'react'

interface Props {
  url: string
  children: ReactNode
}

const Link = ({ url, children }: Props) => {
  return (
    <a
      href={url}
      className="relative before:block before:h-[5px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:right-0 before:transform before:scale-x-0 before:transition-transform before:ease-in-out before:duration-300 hover:before:scale-x-100"
    >
      {children}
    </a>
  )
}

export default Link
