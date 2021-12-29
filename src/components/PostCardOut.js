import React from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

//Sets what is going to be displayed in the user card
const PostCardOut = (props) => {
  const { id, name, text, img, date, time } = props.user;
  let textFormatted = text.replace(/<[^>]*>/g, " ");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <img
            className="img-rounded"
            style={{ width: "6em" }}
            src={img}
            alt="user"
          />
        </div>
        <div className="col-md-4" style={{ display: "contents", width: "6em" }}>
          <Link to={{ pathname: `/post/${id}`, state: { user: props.user } }}>
            <div className="header"> {name} </div> <div> {textFormatted} </div>{" "}
            <div className="header">
              {" "}
              {date} {time}{" "}
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        <div
          className="col-md-4"
          style={{ textAlign: "-webkit-right", width: "20em" }}
        ></div>
      </div>
    </div>
  );
};

export default PostCardOut;
