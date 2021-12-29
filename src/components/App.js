import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./MainComponent";
import SidebarComponent from "./Sidebar";
import "semantic-ui-css/semantic.min.css";
import api from "../api/posts";

function App() {
  return (
    <React.Fragment>
      <Container
        fluid
        style={{ minHeight: "100vh", display: "inline-flex", padding: "0" }}
      >
        <div className="w-100">
          <Router>
            <SidebarComponent />
          </Router>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
