import { TGeneralProps } from '@/utils/types/types';
import React from 'react';

type TOptionProps = TGeneralProps & {
  onClick : (event : React.MouseEvent<HTMLElement>) => void
}

const Options = ({classname, children, onClick} : TOptionProps) => {
  return (
    <>
      <div className={classname} onClick={onClick}>
        {children}
      </div>
    </>
  )
}

export default Options