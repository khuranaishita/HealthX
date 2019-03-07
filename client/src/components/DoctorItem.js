import React from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const DoctorItem = ({
  doctorName,
  doctorProfileImage,
  doctorDesc,
  isCorrectDoc,
  doctorspec,
  doctorexp
}) => (
  <div className="panel panel-primary new">
    {isCorrectDoc && (
      <div>
        <img
          src={doctorProfileImage || DefaultProfileImg}
          alt={doctorName}
          height="150"
          width="150"
          className="rounded float-left"
        />
        <div className="message-area">
          <div className="marginLeft5 paddingLeft">
            {doctorName}
            <p>
              <span className="text-muted">{doctorDesc}</span>
            </p>
            <p>
              <span className="text-muted">{doctorspec}</span>
            </p>
            <p>
              <span className="text-muted">{doctorexp}</span>
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default DoctorItem;
