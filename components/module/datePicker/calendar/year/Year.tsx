'use clients';

import React, { useEffect, useState } from 'react';
import Dropdown from '@/components/reusable/dropdown/Dropdown';
import style from './Year.module.scss';
import Options from '@/components/reusable/options/Options';

const Year = () => {
  const [showYear, setShowYear] = useState(false);

  const handleShowYear = (event : React.MouseEvent<HTMLElement>) =>{
    setShowYear(!showYear)
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.input_group}>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${showYear && style.isShow}`}>
            <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
          </svg>
        </div>
        {/* <Dropdown classname={`${style.dropdown} ${showYear && style.isShow}`}>
          <Options classname={style.dropdown_opt}>
            <div></div>
          </Options>
          <Options classname={style.dropdown_opt}>
            <div></div>
          </Options>
        </Dropdown> */}
      </div>
    </>
  )
}

export default Year