import { ReactNode } from 'react'
import Meta from './Meta'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
