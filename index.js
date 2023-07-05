const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");
const ctxOne = canvasOne.getContext("2d");
const ctxTwo = canvasTwo.getContext("2d");

// const jsIconHover = document.querySelector("#js-icon");

const gridWidth = 50;
const gridHeight = 50;

// // hover over link to js
// jsIconHover.addEventListener("mouseenter", (event) => {
//   //
// });

canvasOne.addEventListener("mouseenter", (event) => {
  // event.target
  console.log("event1", event);
});
canvasTwo.addEventListener("mouseenter", (event) => {
  // event.target
  console.log("event2", event);
});
