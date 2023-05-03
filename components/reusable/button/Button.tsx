import { TGeneralProps } from '@/utils/types/types';
import React from 'react';
import style from './Button.module.scss';


type TButtonProps = TGeneralProps & {
  onClick? : (event : React.MouseEvent<HTMLButtonElement>) => void,
  btnType : 'submit' | 'reset' | 'button'
};


const Button = ({children, classname, btnType, onClick} : TButtonProps) => {
  return (
    <>
      <button className={style[classname]} type={btnType} onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default Button