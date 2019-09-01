import React from "react";
import { render } from "react-dom";
import "./styles.css";
import ListItem from "./list";

function App() {
  const toDos = [
    "Take shower",
    "Clean room",
    "buy groceries",
    "Clean room",
    "make dinner",
    "eat dinner",
    "take shower",
    "go to sleep"
  ];

  return (
    <ul>
      {toDos.map((todo, index, arr) => (
        <ListItem
          key={index}
          idx={index}
          item={todo}
          timer={500}
          lng={arr.length}
        />
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
