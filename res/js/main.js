// For loop that counts from 0 to 10 and checks if the number is odd or even
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write(`<p>Count ${i} is even</p>`);
    } else {
        document.write(`<p>Count ${i} is odd</p>`);
    }
}

// Ask the user for a number between 5 and 20
let myNum;
myNum = parseInt(prompt("Enter a number between 5 and 20:"));

// Do While loop that counts from 1 to myNum
let counter = 1;
do {
    document.write(`<p>Count: ${counter}</p>`);
    counter++;
} while (counter <= myNum);

// Array of subjects
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display array values using forEach
subjects.forEach(subject => {
    document.write(`<p>Subject: ${subject}</p>`);
});

// Display array values separated by commas
document.write(`<p>Subjects: ${subjects.join(", ")}</p>`);
