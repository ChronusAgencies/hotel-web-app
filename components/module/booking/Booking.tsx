import React, { useEffect, useState } from 'react';
import Form from '@/components/reusable/form/Form';
import Input from '@/components/reusable/input/Input';
import Button from '@/components/reusable/button/Button';
import Toggle from '@/components/reusable/toggle/Toggle';
import DatePicker from '../datePicker/DatePicker';
import style from './Booking.module.scss';
import { IBookingData, IPersonCount, IReservetionDate } from '@/utils/interfaces/interfaces';
import { TGeneralProps } from '@/utils/types/types';
import Dropdown from '@/components/reusable/dropdown/Dropdown';
import Options from '@/components/reusable/options/Options';



const Booking = () => {

  const date : Date = new Date();

  const properties : string[] = [
    'Hotel Mulia Jakarta',
    'The Suites Mulia Jakarta',
    'Mulia Resort Bali'
  ]

  const monthsInYear : string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  // state for sidebar opening
  const [isOpen, setIsOpen] = useState(false);

  // dropdown opening
  const [isPropertyShow, setIsPropertyShow] = useState(false);
  const [isCheckInShow, setIsCheckInShow] = useState(false);

  // check in and check out date
  const [reservationDate, setReservationDate] = useState<IReservetionDate>({
    checkIn : {
      date : date.getDate(),
      month : date.getMonth(),
      year : date.getFullYear(),
      monthsInYear : monthsInYear[date.getMonth()]
    },
    checkOut : {
      date : date.getDate(),
      month : date.getMonth(),
      year : date.getFullYear(),
      monthsInYear : monthsInYear[date.getMonth()]
    }
  })

  // person count
  const [personCount, setPersonCount] = useState<IPersonCount>({
    adult : 0,
    child : 0
  })

  // booking Data
  const [bookingData, setBookingData] = useState<IBookingData>({
    reservation : {
      checkIn : reservationDate.checkIn,
      checkOut : reservationDate.checkOut
    },
    person : {
      adult : personCount.adult,
      child : personCount.child
    },
    properties : 'Select Our Properties'
  })

  // set local storage while component did mount
  useEffect(() => {
    // if local storage already exist, clear out
    {localStorage.getItem('bookingData') !== null && localStorage.removeItem('bookingData')};
    // else create new local storage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  },
  // re-render it every booking data changed
  [bookingData]
  );

  const bookingSubmitHandler = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const bookingOpenHandler = (event : React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  const propertyDropdownHandler = (event : React.MouseEvent<HTMLElement | SVGSVGElement>) => {
   setIsPropertyShow(!isPropertyShow);
  };

  const propertyDataHandler = (event : React.MouseEvent<HTMLElement>) => {
    setBookingData({...bookingData, properties : event.currentTarget.innerHTML})
  }

  const joinDate : string = `${reservationDate.checkIn.date}/${reservationDate.checkIn.monthsInYear}/${reservationDate.checkIn.year}`

  return (
    <>
      <Toggle classname={style.toggle} onClick={bookingOpenHandler}>
        <p>Book Now</p>
      </Toggle>
      <aside className={`${style.form_container} ${isOpen && style.isOpen}`}>
        <Form classname={style.form} onSubmit={bookingSubmitHandler}>
          <div id={style.properties} className={style.input_group}>
            <div className={style.input_container} onClick={propertyDropdownHandler}>
              <p className={style.input} onClick={propertyDropdownHandler}>{bookingData.properties}</p>
              <div className={style.svg_container}>
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={propertyDropdownHandler} className={`${isPropertyShow && style.isShow}`}>
                  <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
                </svg>
              </div>
            </div>
              <Dropdown classname={`${style.input_dropdown} ${isPropertyShow && style.isDropdownOpen}`}>
                {properties.map((property : string) => {
                  return(
                    <Options classname={style.dropdown_opt} onClick={propertyDataHandler}>
                      {property}
                    </Options>
                  )
                })
                }
              </Dropdown>
          </div>
          <div id={style.checkIn} className={style.input_group}>
            <div className={style.input_container}>
              <p className={style.input}>{joinDate}</p>
              <div className={style.svg_container}>
                <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2174 17.6111H29L23.9565 22.5L18.913 17.6111H22.6957V0.5H25.2174V17.6111ZM8.82609 16.3889H12.6087V12.7222H8.82609V16.3889ZM15.1304 2.94444H13.8696V0.5H11.3478V2.94444H6.30435V0.5H3.78261V2.94444H2.52174C1.12217 2.94444 0 4.03222 0 5.38889V18.8333C0 20.19 1.12217 21.2778 2.52174 21.2778H15.1304C16.53 21.2778 17.6522 20.19 17.6522 18.8333V5.38889C17.6522 4.03222 16.53 2.94444 15.1304 2.94444ZM2.52174 18.8333V10.2778H15.1304V18.8333H2.52174Z" fill="#999999"/>
                </svg>
              </div>
            </div>
            {/* <DatePicker/> */}
          </div>
          <div id={style.checkOut} className={style.input_group}>
            <div className={style.input_container}>
              <Input classname={style.input} id='checkOut' placeholder='Check Out'/>
              <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6957 5.38889H18.913L23.9565 0.5L29 5.38889H25.2174V22.5H22.6957V5.38889ZM8.82609 16.3889H12.6087V12.7222H8.82609V16.3889ZM15.1304 2.94444H13.8696V0.5H11.3478V2.94444H6.30435V0.5H3.78261V2.94444H2.52174C1.12217 2.94444 0 4.03222 0 5.38889V18.8333C0 20.19 1.12217 21.2778 2.52174 21.2778H15.1304C16.53 21.2778 17.6522 20.19 17.6522 18.8333V5.38889C17.6522 4.03222 16.53 2.94444 15.1304 2.94444ZM2.52174 18.8333V10.2778H15.1304V18.8333H2.52174Z" fill="#999999"/>
              </svg>
            </div>
          </div>
          <div id={style.adultCount} className={style.input_group}>
            <div className={style.input_container}>
              <Input classname={style.input} type='number' id='adultCount' placeholder='Adults'/>
              <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5909 11.875V8.3125H17.0455V5.9375H20.5909V2.375H22.9545V5.9375H26.5V8.3125H22.9545V11.875H20.5909ZM9.95455 9.5C8.65455 9.5 7.54167 9.0349 6.61591 8.10469C5.69015 7.17448 5.22727 6.05625 5.22727 4.75C5.22727 3.44375 5.69015 2.32552 6.61591 1.39531C7.54167 0.465104 8.65455 0 9.95455 0C11.2545 0 12.3674 0.465104 13.2932 1.39531C14.2189 2.32552 14.6818 3.44375 14.6818 4.75C14.6818 6.05625 14.2189 7.17448 13.2932 8.10469C12.3674 9.0349 11.2545 9.5 9.95455 9.5ZM0.5 19V15.675C0.5 15.0021 0.672545 14.3834 1.01764 13.8189C1.36194 13.2553 1.8197 12.825 2.39091 12.5281C3.61212 11.9146 4.85303 11.4542 6.11364 11.1471C7.37424 10.8407 8.65455 10.6875 9.95455 10.6875C11.2545 10.6875 12.5348 10.8407 13.7955 11.1471C15.0561 11.4542 16.297 11.9146 17.5182 12.5281C18.0894 12.825 18.5472 13.2553 18.8915 13.8189C19.2365 14.3834 19.4091 15.0021 19.4091 15.675V19H0.5Z" fill="#999999"/>
              </svg>
            </div>
          </div>
          <div id={style.childCount} className={style.input_group}>
            <div className={style.input_container}>
              <Input classname={style.input} type='number' id='childCount' placeholder='Childrens'/>
              <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5909 11.875V8.3125H17.0455V5.9375H20.5909V2.375H22.9545V5.9375H26.5V8.3125H22.9545V11.875H20.5909ZM9.95455 9.5C8.65455 9.5 7.54167 9.0349 6.61591 8.10469C5.69015 7.17448 5.22727 6.05625 5.22727 4.75C5.22727 3.44375 5.69015 2.32552 6.61591 1.39531C7.54167 0.465104 8.65455 0 9.95455 0C11.2545 0 12.3674 0.465104 13.2932 1.39531C14.2189 2.32552 14.6818 3.44375 14.6818 4.75C14.6818 6.05625 14.2189 7.17448 13.2932 8.10469C12.3674 9.0349 11.2545 9.5 9.95455 9.5ZM0.5 19V15.675C0.5 15.0021 0.672545 14.3834 1.01764 13.8189C1.36194 13.2553 1.8197 12.825 2.39091 12.5281C3.61212 11.9146 4.85303 11.4542 6.11364 11.1471C7.37424 10.8407 8.65455 10.6875 9.95455 10.6875C11.2545 10.6875 12.5348 10.8407 13.7955 11.1471C15.0561 11.4542 16.297 11.9146 17.5182 12.5281C18.0894 12.825 18.5472 13.2553 18.8915 13.8189C19.2365 14.3834 19.4091 15.0021 19.4091 15.675V19H0.5Z" fill="#999999"/>
              </svg>
            </div>
          </div>
          <div id={style.refCode} className={style.input_group}>
            <div className={style.input_container}>
              <Input classname={style.input} type='text' id='refCode' placeholder='Enter Your Promotion Code'/>
            </div>
          </div>
          <Button btnType="submit" classname={'primary-cta'} id={style.primaryCTA}>Check Availability</Button>
          <Button btnType="reset" classname={'underlined'} id={style.resetBtn}>Cancel</Button>
        </Form>
      </aside>
    </>
  )
}

export default Booking