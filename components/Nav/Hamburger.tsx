import cx from 'classnames'

interface Props {
  toggle: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Hamburger = ({ toggle, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-white w-10 h-10 relative focus:outline-none bg-black md:hidden grid col-start-3 m-4 border-2 border-white rounded-md"
    >
      <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={cx(
            `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`,
            toggle ? 'rotate-45' : '-translate-y-1.5'
          )}
        ></span>
        <span
          aria-hidden="true"
          className={cx(
            `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`,
            toggle && 'opacity-0'
          )}
        ></span>
        <span
          aria-hidden="true"
          className={cx(
            `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`,
            toggle ? '-rotate-45' : 'translate-y-1.5'
          )}
        ></span>
      </div>
    </button>
  )
}

export default Hamburger
