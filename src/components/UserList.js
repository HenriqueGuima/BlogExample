import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const UserList = (props) => {
  console.log(props);

  const deleteUserHandler = (id) => {
    props.getUserId(id);
  };

  //Displays all users
  const renderUserList = props.users.map((user) => {
    return (
      <UserCard user={user} clickHander={deleteUserHandler} key={user.id} />
    );
  });

  //Button to add user
  return (
    <div className="main">
      <h2>
        User List{" "}
        <Link to="/add">
          <button className="ui button blue right"> Add User </button>{" "}
        </Link>{" "}
      </h2>{" "}
      <div className="ui celled list"> {renderUserList} </div>{" "}
      <Link to="/">
        <button className="ui button blue center"> Back </button>{" "}
      </Link>{" "}
    </div>
  );
};

export default UserList;
