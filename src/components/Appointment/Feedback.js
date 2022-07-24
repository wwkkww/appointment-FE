import React from 'react'
import "./styles.css";

export const Feedback = ({ message, type }) => {
  return <div className={`feedback ${type}`}>{message}</div>;
};
