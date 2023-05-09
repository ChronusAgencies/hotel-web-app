export interface IDatePicker {
    year? : number,
    month? : number,
    monthsInYear? : string,
    date? : number
}

export interface IReservetionDate extends IDatePicker{
    checkIn : IDatePicker,
    checkOut : IDatePicker
}

export interface IPersonCount{
    adult : number,
    child : number
}

export interface IBookingData{
    reservation : Object,
    person : Object,
    properties : string | null
};

export interface ISelectedYear{
    currentYear : number,
    nextYear : number,
    selectedYear : number
}