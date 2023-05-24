const div1 = document.getElementById("div1");
const p1 = document.getElementById("p1");
const button1 = document.getElementById("button1");

div1.addEventListener(
  "click",
  () => {
    console.log("div clicked");
  },
  true
);
p1.addEventListener(
  "click",
  () => {
    console.log("p clicked");
  },
  true
);
button1.addEventListener(
  "click",
  () => {
    console.log("button clicked");
  },
  true
);
