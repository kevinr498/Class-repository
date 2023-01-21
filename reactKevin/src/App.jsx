import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setTextValue] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = (event) => {
    console.log("Created Image Link");
    const createImage = createElement(
      "img",
      { src: imageSrc, id: "imageId" },
      null
    );
    if (count % 2 == 0) {
      const rootNode = document.getElementById("image");
      const rootRemove = document.getElementById("imageId");
      rootNode.removeChild(rootRemove);
    } else {
      const root = createRoot(document.getElementById("image"));
      root.render(createImage);
    }
    console.log(imageSrc);
    event.preventDefault();
  };
  const buttonValue = count % 2 == 0 ? "Go" : "Reset";

  const imageSrc = "https://source.unsplash.com/random?" + text;

  return (
    <div className="App">
      <div>
        <h1>Display a Random Image</h1>
      </div>
      <h4>Search (separate terms with commas - no spaces)</h4>
      <div className="card">
        <form onSubmit={handleSubmit} className="formInput">
          <input
            type="text"
            onChange={(event) => setTextValue(event.target.value)}
            value={text}
            placeholder="Search for random photo"
          ></input>
          <button
            className="imageSubmitButton"
            onClick={() => setCount((count) => count + 1)}
            type="submit"
          >
            {buttonValue}
          </button>
        </form>
        <div id="image"></div>
      </div>
    </div>
  );
}

export default App;
