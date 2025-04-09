import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.link} className="my-5">
      <button
        onClick={props.onClick}
        className="border-2 rounded-lg py-3 px-6  border-blossoms-200 hover:bg-blossoms-200 font-semibold text-gray-200 hover:text-blossoms-300 transition-all duration-500"
      >
        {props.icon} {props.content}
      </button>
    </Link>
  );
}

export default Button;
