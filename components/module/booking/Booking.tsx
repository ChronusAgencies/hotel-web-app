import React, { useEffect, useState } from 'react';
import Form from '@/components/reusable/form/Form';
import Input from '@/components/reusable/input/Input';
import Button from '@/components/reusable/button/Button';
import Toggle from '@/components/reusable/toggle/Toggle';
import DatePicker from '../datePicker/DatePicker';
import style from './Booking.module.scss';
import { IBookingData, IDatePicker, IPerson } from '@/utils/interfaces/interfaces';
import { TGeneralProps } from '@/utils/types/types';
import Dropdown from '@/components/reusable/dropdown/Dropdown';
import Options from '@/components/reusable/options/Options';

interface IBookingDropdown {
  properties : boolean,
  checkIn : boolean,
  checkOut : boolean
}


const Booking = () => {
  // state for sidebar opening
  const [isOpen, setIsOpen] = useState(false);
  // state for input dropdown opening
  const [isDropdownOpen, setIsDropdownOpen] = useState<IBookingDropdown>({properties : false, checkIn : false, checkOut : false})
  // set state to save how many person
  const [peopleCount, setPeopleCount] = useState<IPerson>({adult : '', child : ''});
  // set state for checkin date
  const [checkInDate, setCheckInDate] = useState<IDatePicker>({year : '', month : '', date : ''});
  // set state for checkout date
  const [checkOutDate, setCheckOutDate] = useState<IDatePicker>({year : '', month : '', date : ''});
  // set state for propertiSelection
  const [propertiesSelect, setPropertiesSelect] = useState({properties : ''})
  // set state to save all booking data
  const [bookingData, setBookingData] = useState<IBookingData>({
    checkInDate : checkInDate,
    checkoutDate : checkOutDate,
    child : peopleCount.child,
    adult : peopleCount.adult,
    properties : propertiesSelect.properties
  })

  // set local storage while component did mount
  useEffect(() => {
    // if local storage already exist, clear out
    {localStorage.getItem('bookingData') !== null && localStorage.clear()};
    // else create new local storage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  },
  // re-render it every booking data changed
  [bookingData]
  );

  // function to handle people count
  // const handleProperties = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPropertiesSelect({...propertiesSelect, properties : event.currentTarget.value});
  // };
  // function to handle people count
  const setChildCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeopleCount({...peopleCount, adult : event.currentTarget.value});
  };

  const setPropertiesValue = (event : React.MouseEvent<HTMLElement>) => {
    let optValue : string = event.currentTarget.innerHTML;
    document.querySelector('#properties')?.setAttribute('value', optValue);
    setIsDropdownOpen({...isDropdownOpen, properties : false});
    setPropertiesSelect({...propertiesSelect, properties : optValue});
    console.log(propertiesSelect.properties);
  };


  // handle form submit to set data to booking data
  const handleBoookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingData(prevState => ({...prevState, 
      checkInDate : checkInDate,
      checkoutDate : checkOutDate,
      child : peopleCount.child,
      adult : peopleCount.adult,
      properties : propertiesSelect.properties}))
  };

  // handle opening booking form
  const handleFormOpen = (event : React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };
  // handle opening dropdown
  const handleOpenDropdown = (event : React.FocusEvent<HTMLInputElement>) => {
    setIsDropdownOpen({...isDropdownOpen, properties : true})
  }


  return (
    <>
      <Toggle classname={style.toggle} onClick={handleFormOpen}>
        <p>Book Now</p>
      </Toggle>
      <aside className={`${style.form_container} ${isOpen && style.isOpen}`}>
        <Form classname={style.form} onSubmit={handleBoookingSubmit}>
          <div id={style.properties} className={style.input_group}>
            <div className={style.input_container}>
              <Input classname={style.input} id='properties' placeholder='Select Properties' onFocus={handleOpenDropdown}/>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
              </svg>
            </div>
            <Dropdown classname={`${style.input_dropdown} ${isDropdownOpen.properties && style.isDropdownOpen}`}>
                <Options classname={style.dropdown_opt} onClick={setPropertiesValue}>
                  Hotel Mulia Jakarta
                </Options>
                <Options classname={style.dropdown_opt} onClick={setPropertiesValue}>
                  The Suites Mulia Jakarta
                </Options>
                <Options classname={style.dropdown_opt} onClick={setPropertiesValue}>
                  Hotel Mulia Bali
                </Options>
              </Dropdown>
          </div>
          <Button btnType="submit" classname={'underlined'}>submit</Button>
        </Form>
      </aside>
    </>
  )
}

export default Booking