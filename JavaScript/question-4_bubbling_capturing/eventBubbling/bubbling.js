const body = document.getElementsByTagName("body")[0];
const div = document.getElementsByTagName("div")[0];
const span = document.getElementsByTagName("span")[0];
const button = document.getElementsByTagName("button")[0];

body.addEventListener("click", () => {
  console.log("body was clicked");
});
div.addEventListener("click", () => {
  console.log("div was clicked");
});
span.addEventListener("click", () => {
  console.log("span was clicked");
});
button.addEventListener("click", () => {
  console.log("button was clicked");
});
