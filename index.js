const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");
const ctxOne = canvasOne.getContext("2d");
const ctxTwo = canvasTwo.getContext("2d");

const gridWidth = 100;
const gridHeight = 100;

canvasOne.addEventListener("mouseenter", (event) => {
  // event.target
  console.log("event1", event);
});
canvasTwo.addEventListener("mouseenter", (event) => {
  // event.target
  console.log("event2", event);
});
