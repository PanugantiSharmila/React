import React from "react";
import ComponentE from "./ComponentE";
// context:create->provide->Consume
export const ComponentC = () => {
  return (
    <div>
      ComponentC
      <ComponentE />
    </div>
  );
};
