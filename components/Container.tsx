import { ReactNode } from 'react';
import clx from 'classnames';

interface Props {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return <div className={`container ${clx(className ? className : ``)}`}>{children}</div>
}
