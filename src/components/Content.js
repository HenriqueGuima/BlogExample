import React, { useEffect, useState } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import api from "../api/posts";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import UserDetail from "./UserDetail";
import { uuid } from "uuidv4";

export default function Content() {
  const [users, setUsers] = useState([]);

  const updateUserHandler = async (user) => {
    const response = await api.put(`/posts/${user.id}`, user);
    const { id, name, type } = response.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...response.data } : user;
      })
    );
  };

  const removeUserHandler = async (id) => {
    await api.delete(`/posts/${id}`);
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUserList);
  };

  const addUserHandler = async (user) => {
    console.log(user);
    const request = {
      id: uuid(),
      ...user,
    };

    const response = await api.post("/posts", request);
    console.log(response);
    setUsers([...users, response.data]);
  };

  //Get Users
  const retrieveUsers = async () => {
    const response = await api.get("/posts");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);

  return (
    <React.Fragment>
      <AuthProvider>
        <Switch>
          {/* ##### ROUTES ##### */}
          <Route
            exact
            path="/"
            component={(
              props //Instead of render, has to be a component to make the route private
            ) => (
              <MainComponent
                {...props}
                users={users}
                getUserId={removeUserHandler}
              />
            )}
          ></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgot-password" component={ForgotPassword}></Route>
          {/* ##### PRIVATE ROUTES ##### */}
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
          ></PrivateRoute>
          {/* <PrivateRoute
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
              />{" "} */}
          <PrivateRoute
            path="/posts"
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
          />
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
          <PrivateRoute path="/post/:id" component={UserDetail} />{" "}
        </Switch>
      </AuthProvider>
    </React.Fragment>
  );
}
