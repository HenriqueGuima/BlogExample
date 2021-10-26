import React from "react";
import { Link } from "react-router-dom";

//User editing component
//Missing current date to pass (or not?). Might not need it

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, type, img, date, time } = props.location.state.user;
    this.state = {
      id,
      name,
      type,
      img,
      date,
      time,
    };
  }

  //State update
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.type === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateUserHandler(this.state);
    this.setState({
      name: "",
      type: "",
      img: "",
      date: new Date() //Regular expressions to format the date time because some of them wouldn't display the correct time
        .toUTCString()
        .match(/([0-9]*[A-Z]*[a-z]*\,)\s[0-9]*\s[A-Z]*[a-z]*/g),
      time: new Date()
        .toTimeString()
        .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
    });
    this.props.history.push("/");
  };

  //Form fields
  render() {
    return (
      <div className="ui main">
        <h2> Edit User </h2>{" "}
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label> Name </label>{" "}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />{" "}
          </div>{" "}
          <div className="field">
            <label> Type </label>{" "}
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={this.state.type}
              onChange={(e) => this.setState({ type: e.target.value })}
            />{" "}
          </div>{" "}
          <div className="field">
            <label> Img url </label>{" "}
            <input
              type="text"
              name="img"
              placeholder="url"
              value={this.state.img}
              onChange={(e) => this.setState({ img: e.target.value })}
            />{" "}
          </div>{" "}
          <button className="ui button blue"> Update </button>{" "}
        </form>{" "}
        <Link to="/">
          <button className="btn btn-primary"> Back </button>{" "}
        </Link>{" "}
      </div>
    );
  }
}

export default EditUser;
