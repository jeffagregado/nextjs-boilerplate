import classnames from 'classnames'
import Link from './Link'

interface Props {
  toggle?: boolean
}

const NavLinksV2 = ({ toggle }: Props) => {
  return (
    <ul
      className={classnames(
        `text-white grid grid-cols-1 col-start-1 col-end-4 bg-gray-500 text-center overflow-hidden transition-all ease-in-out duration-150 md:flex md:gap-x-8 md:m-0 md:px-4 md:col-start-3 md:max-h-10 md:bg-black`,
        `${toggle ? `max-h-[400px]` : `max-h-0`}`
      )}
    >
      <li className="py-2 md:p-0">
        <Link url="#">Link 1</Link>
      </li>
      <li className="py-2 md:p-0">
        <Link url="#">Link 2</Link>
      </li>
      <li className="py-2 md:p-0">
        <Link url="#">Link 3</Link>
      </li>
    </ul>
  )
}

export default NavLinksV2
