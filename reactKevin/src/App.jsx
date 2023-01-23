import { useState } from "react";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import ReadMe from "./components/readMe.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Body />
      <ReadMe />
    </div>
  );
}

export default App;
