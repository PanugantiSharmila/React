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
import { LifeCycleA } from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Tables from "./components/Tables";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import MemoComp from "./components/MemoComp";
import FRParentInput from "./components/FRParentInput";
import { PortalDemo } from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCount from "./components/ClickCount";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import { ComponentC } from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import PostListAxios from "./components/PostListAxios";
import PostFormAxios from "./components/PostFormAxios";

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
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Tables /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <MemoComp name="CGG" /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
      <Hero heroName="BatMan"></Hero>
      <Hero heroName="SuperMan"></Hero> */}
      {/* <ClickCount name="CGG" />
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "CGG" : "Guest")} /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <UserProvider value="CGG">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <PostListAxios /> */}
      <PostFormAxios />
    </div>
  );
}

export default App;
