import { ReactNode } from 'react'
import setClassNames from 'classnames'
import Image from 'next/image'
import { Container } from './Container'

interface Props {
  children: ReactNode
  className?: string
  src: string
  alt: string
}

const Hero = ({ children, className, src, alt }: Props) => {
  return (
    <header
      className={setClassNames(
        'relative min-h-screen w-screen max-w-full',
        className && className
      )}
    >
      <Image src={src} alt={alt} layout="fill" />
      <Container>
        <div>{children}</div>
      </Container>
    </header>
  )
}

export default Hero
