import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MayShowSideBar = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("/admin")) {
        setShow(true);
    } else {
        setShow(false);
    }
  }, [location]);
  return <div>{show && children}</div>;
};

export default MayShowSideBar;
