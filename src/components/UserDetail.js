import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Sets what's going to be displayed in the more detailed page of each user
//No date time here yet (maybe display when it was created)
const UserDetail = (props) => {
  const { name, img, date, time } = props.location.state.user;
  // const htmlPart = { text };
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={img} alt="post" />
        </div>{" "}
        <div className="content">
          <div className="header"> {name} </div>{" "}
          {/* <div className="description"> {type} </div>{" "} */}
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: props.location.state.user.text }}
          />
          {/* <div className="description"> {text} </div>{" "} */}
        </div>{" "}
        <div className="description">
          {" "}
          {date} {time}
        </div>{" "}
      </div>{" "}
      <div className="center-div">
        <Link to="/posts">
          <button className="ui button blue center"> Back to posts </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default UserDetail;
