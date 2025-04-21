import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.link} className="my-5">
      <button
        onClick={props.onClick}
        className="hover:border-2 rounded-lg py-3 px-6 bg-primary hover:border-border hover:bg-background font-semibold text-text hover:text-text-hover transition-all duration-300"
      >
        {props.icon} {props.content}
      </button>
    </Link>
  );
}

export default Button;
