import { TGeneralProps } from '@/utils/types/types';
import React from 'react';

const NavMenu = ({classname,children} : TGeneralProps) => {
  return (
    <nav className={classname}>
      {children}
    </nav>
  )
}

export default NavMenu