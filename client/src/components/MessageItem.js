import React from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const MessageItem = ({
  doctorProfileImage,
  text,
  doctorName,
  removeMessage,
  doctorDesc,
  doctorspec,
  isBooking,
  uniqueID
}) => (
  <div>
    <br />
    <li
      className="list-group-item"
      onClick={function() {
        localStorage.setItem("doctor", uniqueID);
      }}
    >
      <img
        src={doctorProfileImage || DefaultProfileImg}
        alt={doctorName}
        height="100"
        width="100"
        className="rounded float-left"
      />
      <div className="message-area marginLeft5">
        <Link to={`/doctors/${uniqueID}`}>{doctorName} &nbsp;</Link>
        <span className="text-muted">
          {/* <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment> */}
          {doctorspec}
        </span>
        <p>{text}</p>
        {isBooking && (
          <a className="btn btn-outline-success btn1" onClick={removeMessage}>
            Book Appointment
          </a>
        )}
      </div>
    </li>
  </div>
);

export default MessageItem;
