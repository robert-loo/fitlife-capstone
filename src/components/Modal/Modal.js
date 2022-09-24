import "./Modal.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__container">
        <p className="modal__close"onClick={onClose}>X</p>
        <h3 className="modal__spam-title">No Shows for you.</h3>
        <img className="modal__image" alt=""/>

        <div className="modal__home-link">
        </div>
      </div>
    </div>
  );
}
