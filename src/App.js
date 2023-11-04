//import logo from './logo.svg';
import "./App.css";
import Wish from "./components/Wish";
import { HelloP } from "./components/HelloP";
import { Message } from "./components/Message";
import ClickHandler from "./components/ClickHandler";
import { UserGreetings } from "./components/UserGreetings";
import { NameList } from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";
import WelcomeCounter from "./components/WelcomeCounter";
import { StyleSheets } from "./components/StyleSheets";
import { Inline } from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import { FocusInput } from "./components/FocusInput";
import { FocusInputWrap } from "./components/FocusInputWrap";
import Form from "./components/Form";

function App() {
  return (
    <div>
      {/* <h1 className="error">Error msg</h1>
      <h1 className={styles.success}>Success</h1> */}
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
      {/* <NameList /> */}
      {/* <ParentComponent/> */}
      {/* <Welcome name='First' alias='Another'/>
      <Welcome name='Second' alias='Another2'/> */}
      {/* <WelcomeCounter/> */}
      {/* <StyleSheets primary={true} /> */}
      {/* <Inline /> */}
      {/* <FocusInput /> */}
      {/* <FocusInputWrap /> */}
      <Form />
    </div>
  );
}

export default App;
