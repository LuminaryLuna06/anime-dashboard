import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.link} className="my-5">
      <button className="border-2 rounded-lg py-3 px-6  border-pink-300 hover:bg-pink-300 font-semibold">
        {props.content}
      </button>
    </Link>
  );
}

export default Button;
