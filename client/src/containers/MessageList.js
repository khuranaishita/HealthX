import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages, removeMessage, currentUser } = this.props;
    let currentUserID = localStorage.getItem("currentUser");
    let messageList = messages.map(m => (
      <MessageItem
        key={m._id}
        uniqueID={m._id}
        doctorName={m.doctorName}
        doctorProfileImage={m.doctorProfileImageURL}
        doctorDesc={m.doctorDesc}
        doctorspec={m.doctorspec}
        removeMessage={removeMessage.bind(this, currentUserID, m._id)}
        isCorrectUser={currentUser === m.user}
        isBooking="false"
      />
    ));
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
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage }
)(MessageList);
