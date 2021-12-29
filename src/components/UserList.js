import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import { Container } from "react-bootstrap";

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
    <div className="main mt-5">
      <h2>
        Posts{" "}
        <Link to="/add">
          <button className="btn btn-primary"> Adicionar post </button>{" "}
        </Link>{" "}
      </h2>{" "}
      <div className="table-responsive"> {renderUserList} </div>{" "}
      <Container className="d-flex " style={{ minHeight: "50vh" }}></Container>
      <Link to="/dashboard">
        <button className="btn btn-primary"> Voltar </button>{" "}
      </Link>{" "}
    </div>
  );
};

export default UserList;
