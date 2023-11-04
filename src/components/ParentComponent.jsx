import { ChildComponent } from "./ChildComponent";

const ParentComponent = () => {
  const greetParent = (childName) => {
    //console.log(`Hello Parent`);
    alert(`Hello Parent ${childName}`)
  };
  return <ChildComponent greetHandler={greetParent}/>;
};
export default ParentComponent;
