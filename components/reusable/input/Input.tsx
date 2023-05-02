import { TGeneralProps } from '@/utils/types/types';
import React, { HTMLProps } from 'react';
 
type TInputProps = TGeneralProps & HTMLProps<HTMLInputElement>;


const Input = ({classname, children, ...rest} : TInputProps) => {
  return (
    <>
      <div className={classname}>
        <input {...rest} />
        {children}
      </div>
    </>
  )
}

export default Input