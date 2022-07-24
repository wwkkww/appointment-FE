import React, { Fragment } from "react";
import "./styles.css";

export const Modal = ({ children, onClose, title, className }) => {
  return (
    <Fragment>
      <div className="overlay" onClick={onClose} />
      <div className={`modal ${className}`}>
        <h3>{title}</h3>
        <div className="inner">{children}</div>
      </div>
    </Fragment>
  );
};
