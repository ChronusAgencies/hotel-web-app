export interface IDatePicker {
    year? : string | Date   | null,
    month? : string | Date  | null,
    date? : string | Date   | null
}

export interface IPerson {
    child : number | string,
    adult : number | string
}

export interface IBookingData extends IDatePicker, IPerson{
    checkInDate : IDatePicker,
    checkoutDate : IDatePicker,
    properties : string
};