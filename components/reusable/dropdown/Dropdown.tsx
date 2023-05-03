import React from 'react';
import { TGeneralProps } from '@/utils/types/types';


const Dropdown = ({classname, children} : TGeneralProps) => {
  return (
    <>
        <div className={classname}>  
            {children}
        </div>
    </>
  )
}

export default Dropdown