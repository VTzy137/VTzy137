// document.querySelector("html").addEventListener("click", function () {
//    
//  alert("Ouch! Stop poking me!");
// });
  
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

const myImage = document.querySelector("img");
const paragraph = document.querySelector("ww");
const x1 = "paragraph1", x2 = "paragraph2";
let myButton = document.getElementById("button1");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }

myButton.onclick = () => {
  setUserName();
};

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
