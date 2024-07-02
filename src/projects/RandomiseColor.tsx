import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../components/Title";

function handleClick(event: any) {
  console.log(event.target);
}

const handleSecClick = (e: any) => {
  console.log(e.target);
};
export default function RandomiseColor() {
  return (
    <div className="container m-auto text-center justify-between">
      <Title text="Randomize Color" classes={"mb-4"} />

      <button
        className="btn btn-danger m-2"
        onClick={(event) => handleClick(event)}
      >
        Click me
      </button>
      <button className="btn btn-success m-2" onClick={handleSecClick}>
        Click me{" "}
      </button>
      <button className="btn btn-primary m-2">Click me </button>
      <button className="btn btn-warning m-2">Click me </button>
    </div>
  );
}
