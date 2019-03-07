import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";
import GoogleLogin from "react-google-login";

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      profileImageUrl: "",
      loginType: ""
    };
  }
  render() {
    const { currentUser, socialAuth } = this.props;

    const responseGoogle = response => {
      if (response.w3.U3) {
        this.setState(() => {
          return {
            email: response.w3.U3,
            username: response.w3.ig,
            profileImageUrl: response.profileObj.imageUrl,
            loginType: "social"
          };
        });
        // this.state.email = response.w3.U3;
        // this.state.username = response.w3.ig;
        // this.state.profileImageUrl = response.profileObj.imageUrl;
        // this.state.loginType = "social";
        console.log(response);
        socialAuth("signup", this.state);
        this.props.history.push("/");
      }
    };

    // document.getElementById("googleButton");

    if (!currentUser.isAuthenticated) {
      return (
        <div className="home-hero">
          <h1>Welcome to your healthy life</h1>
          <h4>New to HealthX?</h4>
          <Link to="/signup" className="btn btn-primary">
            Sign up here
          </Link>

          <GoogleLogin
            clientId="774309316241-hf7c4q6bl2qcb4pm5m5e041gs301vta7.apps.googleusercontent.com"
            buttonText="Signin with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      );
    }
    return (
      <div>
        <MessageTimeline
          profileImageUrl={currentUser.user.profileImageUrl}
          username={currentUser.user.username}
        />
      </div>
    );
  }
}

// const Homepage = ({ currentUser }) => {
//   if (!currentUser.isAuthenticated) {
//     return (
//       <div className="home-hero">
//         <h1>Welcome to your healthy life</h1>
//         <h4>New to HealthX?</h4>
//         <Link to="/signup" className="btn btn-primary">
//           Sign up here
//         </Link>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <MessageTimeline
//         profileImageUrl={currentUser.user.profileImageUrl}
//         username={currentUser.user.username}
//       />
//     </div>
//   );
// };

export default Homepage;
