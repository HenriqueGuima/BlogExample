import React, { useState } from "react";
import {
  Checkbox,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Content from "./Content";

export default function SidebarComponent() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [visible, setVisible] = React.useState(true);

  return (
    <React.Fragment>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          //   onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          >
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            name="posts"
            active={activeItem === "posts"}
            onClick={handleItemClick}
            as={Link}
            to="/posts"
          >
            <Icon name="list" />
            Posts
          </Menu.Item>
          <Menu.Item
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={handleItemClick}
            as={Link}
            to="/dashboard"
          >
            <Icon name="dashboard" />
            Dashboard
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Container fluid>
            <Content />
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>

      {/* <Menu secondary size="massive" color="teal">
        <Menu.Menu position="right">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={handleItemClick}
            as={Link}
            to="/dashboard"
          />
          <Menu.Item
            name="posts"
            active={activeItem === "posts"}
            onClick={handleItemClick}
            as={Link}
            to="/posts"
          />
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === "signup"}
            onClick={handleItemClick}
            as={Link}
            to="/signup"
          />
        </Menu.Menu>
      </Menu> */}
      {/* <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use href="#bootstrap"></use>
          </svg>
          <span class="fs-4">Coiso</span>
        </a>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="/" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16">
                <use href="/"></use>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="/dashboard" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use href="/dashboard"></use>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/posts" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use href="/posts"></use>
              </svg>
              Posts
            </a>
          </li>
        </ul>
        <hr></hr>
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            ></img>
            <strong>Perfil</strong>
          </a>
          <ul
            class="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a class="dropdown-item" href="/update-profile">
                Definições
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </React.Fragment>
  );
}
