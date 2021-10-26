import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserCard from "./UserCard";

const MainComponent = (props) => {
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
    <div className="main mt-5">
      <div className="table-responsive"> {renderUserList} </div>{" "}
      <Container className="d-flex " style={{ minHeight: "50vh" }}></Container>
      <Link to="/dashboard">
        <button className="btn btn-primary"> Entrar </button>{" "}
      </Link>{" "}
    </div>
  );
};

export default MainComponent;
