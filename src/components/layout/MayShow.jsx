import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MayShow = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (location.pathname.includes("/admin")) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);
  return <div>{show && children}</div>;
};

export default MayShow;
