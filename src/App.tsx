import { useEffect, useState } from "react";
import "./App.css";
import ComponentWithContext from "./components/ComponentWithContext";
import ComponentWithReducer from "./components/ComponentWithReducer";
import ComponentWithState from "./components/ComponentWithState";
import ComponentWithStateWithRef from "./components/ComponentWithStateWithRef";
import ComponentWithUseEffect from "./components/ComponentWithUseEffect";
import Home from "./components/Home";
import TestComponent from "./components/TestComponent";

function App() {
  const [pagePath, setPagePath] = useState<string>(window.location.pathname);

  useEffect(() => {
    window.onpopstate = (e) => {
      setPagePath(e.state.url);
    };
  }, []);

  switch (pagePath) {
    case "/state":
      return <ComponentWithState />;
    case "/effect":
      return <ComponentWithUseEffect />;
    case "/reducer":
      return <ComponentWithReducer />;
    case "/prop":
      return <TestComponent prop="부모로부터 받은 prop" />;
    case "/array":
      return <ComponentWithStateWithRef />;
    case "/context":
      return <ComponentWithContext />;
    default:
      return <Home />;
  }
}

export default App;
