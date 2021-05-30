import { ReactNode } from 'react'
import setClassNames from 'classnames'

interface Props {
  children: ReactNode
  className?: string
}

const Text = ({ children }: Props) => {
  return <p>{children}</p>
}

const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={setClassNames('font-bold', className ? className : 'text-2xl')}
    >
      {children}
    </h1>
  )
}

Text.Title = Title

export default Text
