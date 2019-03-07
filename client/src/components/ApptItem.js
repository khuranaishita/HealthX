import React from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const ApptItem = ({
  doctorProfileImage,
  text,
  doctorName,
  addMessage,
  isCorrectUser,
  doctorDesc,
  isBooking,
  uniqueID
}) => (
  <div>
    {!isBooking && isCorrectUser && (
      <div>
        <li className="list-group-item">
          <img
            src={doctorProfileImage || DefaultProfileImg}
            alt={doctorName}
            height="100"
            width="100"
            className="timeline-image"
          />
          <div className="message-area new">
            <Link to="#">{doctorName} &nbsp;</Link>
            <span className="text-muted">
              {/* <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment> */}
              {doctorDesc}
            </span>
            <p>{text}</p>
            <a className="btn btn-danger" onClick={addMessage}>
              Cancel Appointment
            </a>
          </div>
        </li>
      </div>
    )}
  </div>
);

export default ApptItem;
