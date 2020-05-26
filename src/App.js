import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement(
    "div",
    {
      id: "something-important",
    },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Sammy",
        animal: "Dog",
        breed: "Beagle",
      }),
      React.createElement(Pet, {
        name: "Bauer",
        animal: "Dog",
        breed: "Labrador",
      }),
      React.createElement(Pet, {
        name: "Coco",
        animal: "Dog",
        breed: "Unknown",
      }),
    ]
  );
};
render(React.createElement(App), document.getElementById("root"));
