import Logo from './Logo'
import NavLinks from './NavLinks'

const Nav = () => {
  return (
    <nav className="container flex my-4 justify-between">
      <Logo className="flex-1" />
      <NavLinks />
    </nav>
  )
}

export default Nav
