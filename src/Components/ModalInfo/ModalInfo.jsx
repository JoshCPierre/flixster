import React from "react";
import "./ModalInfo.css";

const ModalInfo = ({ info_name, info }) => {
  return (
    <div className="modal-info-center">
      <h4 className="modal-info-name">{info_name}</h4>
      <p className="modal-info">{info} {info_name === "Runtime" ? "mins": ""}</p>
    </div>
  );
};

export default ModalInfo;
