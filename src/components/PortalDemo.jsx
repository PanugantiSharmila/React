import React from "react";
import ReactDOM from "react-dom";

export const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h1>Portal created</h1>,
    document.getElementById("portal-root")
  );
};
