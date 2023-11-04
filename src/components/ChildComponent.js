export const ChildComponent = ({ greetHandler }) => {
  return <button onClick={()=>greetHandler("Child")}>Greet Parent</button>;
};
