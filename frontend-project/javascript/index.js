// Accessing the heading and button elements in JavaScript using Query Selectors
const headingElement = document.querySelector("#heading-element");
const redBtn = document.querySelector("#click-btn");

// creating changeMyColor() function
function changeMyColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    headingElement.style.color = "#" + randomColor;
    console.log(headingElement.style.color);

}


// Adding an event listener to the button
redBtn.addEventListener("click", changeMyColor);

// The first argument, "click" denotes that an event should occur when the user clicks the button, and the second argument is the name of the function which will run after the user clicks the button.



