import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import UserList from "./UserList";
import api from "../api/posts";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [users, setUsers] = useState([]);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Atualizar Perfil
          </Link>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </Card>
      <h2 className="text-center mb-4">Posts</h2>
      <Link to="/posts" className="btn btn-primary w-100 mt-3">
        Posts
      </Link>
    </React.Fragment>
  );
}
