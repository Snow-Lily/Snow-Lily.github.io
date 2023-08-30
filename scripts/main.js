// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// alert("hello!");

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagies/goliath-bird-eater-tarantula.avif") 
  {
    myImage.setAttribute("src", "imagies/spiders.avif");
  } 
  else 
  {
    myImage.setAttribute("src", "imagies/goliath-bird-eater-tarantula.avif");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() 
{
  const myName = prompt("Please enter your name.");
  if (!myName) 
  {
    setUserName();
  } 
  else 
  {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


if (!localStorage.getItem("name")) 
{
  setUserName();
} 
else 
{
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};