import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDoctor } from "../store/actions/doctors";
import DoctorItem from "../components/DoctorItem";

class DoctorDetail extends Component {
  render() {
    const { messages } = this.props;
    let doctor = localStorage.getItem("doctor");
    let docList = messages.map(m => (
      <DoctorItem
        key={m._id}
        doctorName={m.doctorName}
        doctorProfileImage={m.doctorProfileImageURL}
        doctorDesc={m.doctorDesc}
        doctorspec={m.doctorspec}
        doctorexp={m.doctorexp}
        isCorrectDoc={doctor === m._id}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {docList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    doctors: state.doctors,
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchDoctor }
)(DoctorDetail);
