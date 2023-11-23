// Memo
// higher order Component that adds something and returns new enhanced component
// similar to PureComponent works with functional component
//Using memo will cause React to skip rendering a component if its props have not changed.
import React from "react";

function MemoComp({ name }) {
  console.log("render memo component");
  return <div>MemoComp{name}</div>;
}

export default React.memo(MemoComp);
