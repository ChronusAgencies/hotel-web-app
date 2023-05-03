'use client';

import React, { useState } from 'react';
import Date from './date/Date';
import Month from './month/Month';
import Year from './year/Year';
import Button from '@/components/reusable/button/Button';
import { IDatePicker } from '@/utils/interfaces/interfaces';

const DatePicker = () => {

  


  return (
    <>
      <form>
        <Date/>
        <Month/>
        <Year/>
      </form>
    </>
  )
}

export default DatePicker