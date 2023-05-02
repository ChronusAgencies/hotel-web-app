import { TGeneralProps } from '@/utils/types/types';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type TIconProps = TGeneralProps & LinkProps;
 
const Icon = ({classname, children, ...rest} : TIconProps) => {
  return (
    <>
      <Link className={classname} {...rest}>
        {children}        
      </Link>
    </>
  )
}

export default Icon