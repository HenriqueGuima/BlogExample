import React from "react";

//User editing component
//Missing current date to pass (or not?). Might not need it

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        const { id, name, type, img } = props.location.state.user;
        this.state = {
            id,
            name,
            type,
            img,
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
        this.setState({ name: "", type: "", img: "" });
        this.props.history.push("/");
    };

    //Form fields
    render() {
        return ( <
            div className = "ui main" >
            <
            h2 > Edit User < /h2>{" "} <
            form className = "ui form"
            onSubmit = { this.update } >
            <
            div className = "field" >
            <
            label > Name < /label>{" "} <
            input type = "text"
            name = "name"
            placeholder = "Name"
            value = { this.state.name }
            onChange = {
                (e) => this.setState({ name: e.target.value }) }
            />{" "} <
            /div>{" "} <
            div className = "field" >
            <
            label > Type < /label>{" "} <
            input type = "text"
            name = "type"
            placeholder = "Type"
            value = { this.state.type }
            onChange = {
                (e) => this.setState({ type: e.target.value }) }
            />{" "} <
            /div>{" "} <
            div className = "field" >
            <
            label > Img url < /label>{" "} <
            input type = "text"
            name = "img"
            placeholder = "url"
            value = { this.state.img }
            onChange = {
                (e) => this.setState({ img: e.target.value }) }
            />{" "} <
            /div>{" "} <
            button className = "ui button blue" > Update < /button>{" "} <
            /form>{" "} <
            /div>
        );
    }
}

export default EditUser;