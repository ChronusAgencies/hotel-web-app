import { TGeneralProps } from '@/utils/types/types';
import React from 'react';

const Container = ({classname, children} : TGeneralProps) => {
  return (
    <div className={classname}>
        {children}
    </div>
  )
}

export default Container