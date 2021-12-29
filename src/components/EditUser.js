import React from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";

//User editing component

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, text, desc, img, date, time } = props.location.state.user;
    this.state = {
      id,
      name,
      text,
      desc,
      img,
      date,
      time,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  //State update
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.text === "") {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    this.props.updateUserHandler(this.state);
    this.setState({
      name: "",
      text: "",
      desc: "",
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
        <h2> Editar Utilizador </h2>{" "}
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label> Nome </label>{" "}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />{" "}
          </div>{" "}
          <div className="field">
            <label> Descrição </label>{" "}
            <input
              type="text"
              name="desc"
              placeholder="desc"
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
            />{" "}
          </div>{" "}
          <div className="field">
            <label> Texto </label>{" "}
            <ReactQuill value={this.state.text} onChange={this.handleChange} />
          </div>{" "}
          <div className="field">
            <label> Miniatura </label>{" "}
            <input
              type="text"
              name="img"
              placeholder="url"
              value={this.state.img}
              onChange={(e) => this.setState({ img: e.target.value })}
            />{" "}
          </div>{" "}
          <button className="ui button blue"> Editar </button>{" "}
        </form>{" "}
        <Link to="/posts">
          <button className="btn btn-primary"> Voltar </button>{" "}
        </Link>{" "}
      </div>
    );
  }
}

export default EditUser;
