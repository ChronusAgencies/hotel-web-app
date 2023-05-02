import { TGeneralProps } from '@/utils/types/types';
import React, { HTMLProps } from 'react';

type TToggleProps = TGeneralProps & {
  onClick : (event : React.MouseEvent<HTMLElement>) => void
};

const Toggle = ({classname, children, onClick} : TToggleProps) => {
  return (
    <>
      <div className={classname} onClick={onClick}> 
        {children}
      </div>
    </>
  )
}

export default Toggle