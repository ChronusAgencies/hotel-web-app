import { TGeneralProps } from '@/utils/types/types';
import React, { HTMLProps } from 'react';
 
type TInputProps = TGeneralProps & HTMLProps<HTMLInputElement> &{
  onChange? : (event : React.ChangeEvent<HTMLInputElement> )  => void
};


const Input = ({classname, onChange, ...rest} : TInputProps) => {
  return (
    <>
        <input className={classname} onChange={onChange} {...rest}/>
    </>
  )
}

export default Input