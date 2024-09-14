document.write("<h3>Dog Constructor with Can Talk Check</h3>");

// Constructor function to create new dog objects
function Dog(name, breed, show, role, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  // Method to display the dog's description and whether it can talk
  this.myGreeting = function () {
    let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
    document.write(`<p>Hello, my name is <b>${this.name}</b> and <b>${talkMessage}</b></p>`);
  };
}

// Creating two fictional dog objects
let brian = new Dog(
  "Brian", 
  "Labrador Retriever", 
  "Family Guy", 
  "I am a witty and sarcastic family dog", 
  "I have a deep voice and speak english", 
  true
);

let snoopy = new Dog(
  "Snoopy", 
  "Beagle", 
  "Peanuts", 
  "I am Charlie Brown’s pet dog with a great imagination", 
  "I think creatively but cannot talk", 
  false
);

// Storing the dog objects in an array
let dogList = [brian, snoopy];

// Function to display each property and value using a for...in loop
function displayDogProperties(dog) {
  document.write(`<h3>Information about <b>${dog.name}</b></h3>`);
  for (let property in dog) {
    if (typeof dog[property] !== "function") {
      document.write(`<p><b>${property}:</b> ${dog[property]}</p>`);
    }
  }
}

// Prompt the user to select a dog
let selectedDogName = prompt("Please select a dog: Brian or Snoopy");

// Find the selected dog in the list
let selectedDog = dogList.find(dog => dog.name.toLowerCase() === selectedDogName.toLowerCase());

if (selectedDog) {
  // Call the myGreeting method to display the greeting message
  selectedDog.myGreeting();
  // Display the dog's properties
  displayDogProperties(selectedDog);
} else {
  // Display error message if the dog is not found
  document.write(`<p style="color:red;">Error: The dog "${selectedDogName}" does not exist in the list.</p>`);
}
