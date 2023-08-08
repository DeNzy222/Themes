const Dark = document.getElementById("dark");
const Light = document.getElementById("light");
const theBody = document.querySelector("body");
const sideBar = document.querySelector(".sidebar");
Dark.style.theBody = "black";

const UserClicks = 0;

document.getElementById("dark").addEventListener("click", () => {
  theBody.style.backgroundColor = "black";
  sideBar.style.backgroundColor = "white";
  sideBar.style.border = "2px solid black";
  Dark.style.border = "2px solid black";
  console.log(UserClicks["click"]);
});

document.getElementById("light").addEventListener("click", () => {
  theBody.style.backgroundColor = "white";
  sideBar.style.backgroundColor = "black";
  Light.style.border = "2px solid white";
  console.log(UserClicks["click"]);
});

document.getElementById("light").addEventListener('mousemove', () => {
  Light.style.border = "none";
});
