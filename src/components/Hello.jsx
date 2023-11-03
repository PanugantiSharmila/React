import React from "react";

export const Hello = () => {
  return (
    // <div>
    //   <h1>Hello Participants</h1>
    // </div>
    React.createElement("div",{id:"hello",className:"dummy"},null,React.createElement("h1",null,"Hello Participants"))
  );
};
