import logo from "./logo.svg";
import "./App.css";
import State from "./components/3-3.Hooks/State";
import Reducer from "./components/3-3.Hooks/Reducer";

// import Event from "./components/2-7.Event/Event";
// import Condition from "./components/2-8.ConditionalRendering/Condition";
// import List from "./components/2-9.List/List";
// import ControlledComponent from "./components/2-10.Form/ControlledComponent";
// import UnControlledComponent from "./components/2-10.Form/UnControlledComponent";
// import Composition from "./components/2-4.props/Composition";
// import Extraction from "./components/2-4.props/Extraction/Extraction";
// import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent";
// import ClassComponent from "./components/2-5.State/ClassComponent";
// import FunctionalComponent from "./components/2-5.State/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <Reducer />
      <State />
      {/* <UnControlledComponent /> */}
      {/* <ControlledComponent /> */}
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Composition /> */}
      {/* <Extraction /> */}
    </div>
  );
}

export default App;
