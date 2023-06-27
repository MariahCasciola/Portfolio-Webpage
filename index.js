const canvasOne = document.querySelector("#canvas-one");
const canvasTwo = document.querySelector("#canvas-two");

canvasOne.addEventListener("mouseenter", (event) => {
    // event.target
    console.log("event1", event)
});
canvasTwo.addEventListener("mouseenter", (event) => {
    // event.target
    console.log("event2", event);
});
