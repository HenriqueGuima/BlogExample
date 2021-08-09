import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import api from "../api/users";
import AddUser from "./AddUser";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import EditUser from "./EditUser";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);

  //Get Users
  const retrieveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  //Handlers

  const addUserHandler = async (user) => {
    console.log(user);
    const request = {
      id: uuid(),
      ...user,
    };

    const response = await api.post("/users", request);
    console.log(response);
    setUsers([...users, response.data]);
  };

  const updateUserHandler = async (user) => {
    const response = await api.put(`/users/${user.id}`, user);
    const { id, name, type } = response.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...response.data } : user;
      })
    );
  };

  const removeUserHandler = async (id) => {
    await api.delete(`/users/${id}`);
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUserList);
  };

  //Gets all users

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              {/* ##### ROUTES ##### */}
              <Route path="/signup" component={Signup}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/forgot-password" component={ForgotPassword}></Route>
              {/* ##### PRIVATE ROUTES ##### */}
              <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
              <PrivateRoute
                path="/users"
                exact
                component={(
                  props //Instead of render, has to be a component to make the route private
                ) => (
                  <UserList
                    {...props}
                    users={users}
                    getUserId={removeUserHandler}
                  />
                )}
              />{" "}
              <PrivateRoute
                path="/add"
                component={(props) => (
                  <AddUser {...props} addUserHandler={addUserHandler} />
                )}
              />{" "}
              <PrivateRoute
                path="/edit"
                component={(props) => (
                  <EditUser {...props} updateUserHandler={updateUserHandler} />
                )}
              />{" "}
              <PrivateRoute path="/user/:id" component={UserDetail} />{" "}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
