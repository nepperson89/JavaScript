// Input for the user's first name
let Fname = prompt("What is your first name?");

// Welcome message for the user
alert(`Welcome, ${Fname}!`);

// Stored value for Pi
const piValue = 3.1415926;

// Input for the user's favorite number
let myFavNum = prompt("What is your favorite number?");

// Convert the user input to a number type
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle with the user’s favorite number
let myArea = piValue * (myFavNum * myFavNum);

// Display the contents of each variable in a message
document.write(`Hello ${Fname}, you entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle's area would be ${myArea}.`);
