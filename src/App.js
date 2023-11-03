//import logo from './logo.svg';
import "./App.css";
import Wish from "./components/Wish";
import { HelloP } from "./components/HelloP";
import { Message } from "./components/Message";
import ClickHandler from "./components/ClickHandler";
import { UserGreetings } from "./components/UserGreetings";
import { NameList } from "./components/NameList";

function App() {
  return (
    <div>
      {/* <Wish name="ABC" company="CGG">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          totam.
        </p>                                              
         Children props 
      </Wish>
      <Wish name="xyz" company="Microsoft">
        <button>Testing</button>
      </Wish>
      <Wish name="pqr" company="Google" /> */}

      {/* <HelloP /> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <UserGreetings /> */}
      <NameList />
    </div>
  );
}

export default App;
