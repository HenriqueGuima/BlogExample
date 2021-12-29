import React from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import Quill from "quill";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: new Date()
        .toUTCString()
        .match(/([0-9]*[A-Z]*[a-z]*,)\s[0-9]*\s[A-Z]*[a-z]*/g),
      time: new Date()
        .toTimeString()
        .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
    };
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(value) {
    this.setState({
      text: value,
      date: new Date()
        .toUTCString()
        .match(/([0-9]*[A-Z]*[a-z]*,)\s[0-9]*\s[A-Z]*[a-z]*/g),
      time: new Date()
        .toTimeString()
        .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
    });
  }

  state = {
    name: "",
    // text: "",
    img: "",
    desc: "",
    // date: new Date() //Regular expressions to format the date time because some of them wouldn't display the correct time
    //   .toUTCString()
    //   .match(/([0-9]*[A-Z]*[a-z]*,)\s[0-9]*\s[A-Z]*[a-z]*/g),
    // time: new Date()
    //   .toTimeString()
    //   .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
    // date: new Date().toISOString()
    // date: "sfdfsdfsdsd",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.type === "") {
      alert("Please fill all fields");
      return;
    }
    this.props.addUserHandler(this.state);

    this.setState({
      name: "",
      type: "",
      desc: "",
      img: "",
      // date: new Date()
      //   .toUTCString()
      //   .match(/([0-9]*[A-Z]*[a-z]*,)\s[0-9]*\s[A-Z]*[a-z]*/g),
      // time: new Date()
      //   .toTimeString()
      //   .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
      // date: new Date().toISOString(),
      // date: "sfdfsdfsdsd",
    });
    this.props.history.push("/posts");
    // console.log(this.state.name);
  };

  //Form fields
  render() {
    Quill.register("modules/counter", function (quill, options) {
      var container = document.querySelector("#counter");
      quill.on("text-change", function () {
        var text = quill.getText();
        // There are a couple issues with counting words
        // this way but we'll fix these later
        container.innerText = text.split(/\s+/).length;
      });
    });

    // var quill = new Quill("#editor-container", {
    //   modules: {
    //     toolbar: [
    //       [{ header: [1, 2, false] }],
    //       ["bold", "italic", "underline"],
    //       ["image", "code-block"],
    //     ],
    //   },
    //   placeholder: "Compose an epic...",
    //   theme: "snow", // or 'bubble'
    // });

    return (
      <div className="ui main">
        <h2> Adicionar post </h2>{" "}
        <form className="ui form" onSubmit={this.add}>
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
              placeholder="Descrição"
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
            />{" "}
          </div>{" "}
          <div className="field">
            <label> Texto </label>
            <ReactQuill
              value={this.state.text}
              formats={this.formats}
              onChange={this.handleChange}
              theme="snow"
            />
          </div>{" "}
          {/* ###### MAKE IT UPLOADABLE ###### */}
          <div className="field">
            <label> Imagem </label>{" "}
            <input
              type="text"
              name="img"
              placeholder="url"
              value={this.state.img}
              onChange={(e) => this.setState({ img: e.target.value })}
            />{" "}
          </div>{" "}
          <div>{this.state.date}</div>
          <button
            className="ui button blue"
            type="submit"
            onChange={(e) =>
              this.setState({ time: e.target.value }, { date: e.target.value })
            }
          >
            {" "}
            Adicionar{" "}
          </button>{" "}
        </form>{" "}
        <Link to="/posts">
          <button className="btn btn-primary"> Voltar </button>{" "}
        </Link>{" "}
      </div>
    );
  }
}

export default AddUser;
