document.write("<h3>Simple Object</h3>");

// Creating a literal object named myDog
let myDog = new Object();
myDog.name = "Scooby-Doo";
myDog.breed = "Great Dane";
myDog.show = "Scooby-Doo, Where Are You!";
myDog.role = "I am a Crime-solving dog in a mystery-solving gang";
myDog.mySound = "I’m scared but I’m always ready to help!";
  
// Method to display the dog's description
myDog.description = function() {
  document.write(`<p>Hello, my name is <b>${myDog.name}</b>, when I bark <b>${myDog.mySound}</b>. I starred in the tv show <b>${myDog.show}</b>. My character was a <b>${myDog.breed}</b>. <b>${myDog.role}</b>.<p>`);
};

// Calling the description method
myDog.description();

// Constructor function to create a new dog object
function Dog(name, breed, show, role, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  // Method to display the dog's greeting
  Dog.prototype.myGreeting = function() {
    document.write(`<p>Hello, my name is <b>${this.name}</b>, when I bark <b>${this.mySound}</b>. I starred in the tv show <b>${this.show}</b>. My character was a <b>${this.breed}</b>. <b>${this.role}</b>.<p>`);
  };
}

document.write("<h3>Simple Constructor</h3>");

// Creating a new dog object using the constructor
let myDogConst = new Dog(
  "Scooby-Doo", 
  "Great Dane", 
  "Scooby-Doo, Where Are You!", 
  "I am a Crime-solving dog in a mystery-solving gang", 
  "I’m scared but I’m always ready to help!", 
  true
);

// Calling the myDogConst constructor
myDogConst.myGreeting();
