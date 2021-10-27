import { useState } from 'react'
import Hamburger from './Hamburger'
import Logo from './Logo'
import NavLinksV2 from './NavLinksV2'

const NavV2 = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="w-full bg-black">
      <div className="container px-0 md:p-4">
        <nav className="grid grid-cols-2 items-center">
          <Logo className="text-white mx-8 md:mx-0" />
          {/* <label
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-white cursor-pointer grid col-start-3 p-4"
          >
            Menu
          </label> */}
          <Hamburger onClick={() => setToggle(!toggle)} toggle={toggle} />
          <NavLinksV2 toggle={toggle} />
        </nav>
      </div>
    </header>
  )
}

export default NavV2
