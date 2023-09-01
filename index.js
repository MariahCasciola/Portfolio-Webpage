// const width = document.documentElement.clientWidth;
const lookAtWebs = document.querySelectorAll(".hover-message");

if (width >= 1200) {
    // TODO empty inner text?
  lookAtWebs.innerText = `uhu uhu uhu, purple is a good color on you`;
//   lookAtWebs.classList.add("hover-message");
//   lookAtWebs.classList.add("flex-container");
  const main = document.querySelector("main");
  main.prepend(lookAtWebs);
}

// if (width < 1200) {
//   // remove child
//   main.removeChild(lookAtWebs);
// }
