import React, { Fragment } from "react";

function Columns() {
  const items = ["abc", "xyz", "pqr", "onm"];
  return (
    // <Fragment>
    //   <td>ReactJS</td>
    //   <td>JS</td>
    // </Fragment>
    <Fragment>
      {items.map((item, index) => (
        <Fragment key={index}>
          <td>{item}</td>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Columns;
