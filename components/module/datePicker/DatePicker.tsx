import Calendar from "./calendar/Calendar";
import Year from "./calendar/year/Year";
import Month from "./calendar/month/Month";
import style from "./DatePicker.module.scss";


const DatePicker = () => {

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.input_group}>
          <Year/>
          <Month/>
        </div>
        <Calendar/>
      </div>
    </>
  )
}

export default DatePicker