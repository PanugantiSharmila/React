import React from "react";
import { UserConsumer } from "./userContext";

export const ComponentF = () => {
  return (
    <UserConsumer>
      {(userName) => {
        return <div>Hello {userName}</div>;
      }}
    </UserConsumer>
  );
};
