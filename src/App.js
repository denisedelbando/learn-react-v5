import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  // return React.createElement(
  //   "div",
  //   {
  //     id: "something-important",
  //   },
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Sammy",
  //       animal: "Dog",
  //       breed: "Beagle",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Bauer",
  //       animal: "Dog",
  //       breed: "Labrador",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Coco",
  //       animal: "Dog",
  //       breed: "Unknown",
  //     }),
  //   ]
  // );
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="Sammy" animal="Dog" breed="Beagle" />
      <Pet name="Bauer" animal="Dog" breed="Labrador" />
      <Pet name="Lilly" animal="Cat" breed="Unknown" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
