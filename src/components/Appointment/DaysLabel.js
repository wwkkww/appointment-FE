import React from 'react'
import "./styles.css";
import { DAYS_SHORT } from "../../utils/helper";

export const DayLabels = () => {
  return DAYS_SHORT.map((dayLabel, index) => {
    return (
      <div className="dayLabel cell" key={index}>
        {dayLabel}
      </div>
    );
  });
};
