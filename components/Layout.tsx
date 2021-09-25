import { ReactNode } from 'react'
import Meta from './Meta'
import Nav from './Nav/Nav'
import NavV2 from './Nav/NavV2';

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {/* <Nav /> */}
      <NavV2 />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
