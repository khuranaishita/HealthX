import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAppts, addMessage } from "../store/actions/appts";
import ApptItem from "../components/ApptItem";

class ApptList extends Component {
  componentDidMount() {
    this.props.fetchAppts();
  }

  render() {
    const { appts, currentUser, addMessage } = this.props;
    let currentUserID = localStorage.getItem("currentUser");
    let messageList = appts.map(m => (
      <ApptItem
        key={m._id}
        uniqueID={m._id}
        date={m.createAt}
        doctorName={m.doctorName}
        doctorProfileImage={m.doctorProfileImageURL}
        doctorDesc={m.doctorDesc}
        addMessage={addMessage.bind(this, currentUserID, m._id)}
        isCorrectUser={currentUser == m.bookedUser}
      />
    ));
    if (messageList.length == 0) {
      return <h4>You have no upcoming appointments </h4>;
    }
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {messageList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appts: state.appts,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchAppts, addMessage }
)(ApptList);
