import React from 'react'
import Options from '../options/Options'
import { TGeneralProps } from '@/utils/types/types'

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