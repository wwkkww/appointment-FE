import { setHours, setMinutes, getDay } from "date-fns";

export const MOCK_LOADING_TIME = 2000;

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const isWeekdays = (date) => {
  return  getDay(date) !== 0 && getDay(date) !== 6;
};

export const nonWorkingHours = [
  setHours(setMinutes(new Date(), 0), 0),
  setHours(setMinutes(new Date(), 0), 1),
  setHours(setMinutes(new Date(), 0), 2),
  setHours(setMinutes(new Date(), 0), 3),
  setHours(setMinutes(new Date(), 0), 4),
  setHours(setMinutes(new Date(), 0), 5),
  setHours(setMinutes(new Date(), 0), 6),
  setHours(setMinutes(new Date(), 0), 7),
  setHours(setMinutes(new Date(), 0), 8),
  setHours(setMinutes(new Date(), 0), 18),
  setHours(setMinutes(new Date(), 0), 19),
  setHours(setMinutes(new Date(), 0), 20),
  setHours(setMinutes(new Date(), 0), 21),
  setHours(setMinutes(new Date(), 0), 22),
  setHours(setMinutes(new Date(), 0), 23),
  setHours(setMinutes(new Date(), 0), 24),
]

export const toStartOfDay = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

const pad = (input) => {
  return input < 10 ? "0" + input : input;
};


export const dateToInputFormat = (date) => {
  if (!date) {
    return null;
  }

  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}`;
};