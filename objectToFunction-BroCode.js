// how to pass object to a fucntion
// 1. create a function
// 2. Invoke the function with object or property as arguements
// Below is the example for display and change the properties of an object using function

class Car{
  constructor(model, year, colour){
    this.model = model;
    this.year = year;
    this.colour = colour;
  }
}

const car1 = new Car("Ferrari", 2003, "Red");
const car2 = new Car("Mazda", 2004, "Blue");
const car3 = new Car("Toyota", 199, "Yellow");



displayInfo(car1);        // display info (properties) of object 'car1'
changeInfo(car1, "Gold"); // change the colour of 'car1' to 'Gold'
displayInfo(car1);        // display info of 'car1' and new colour 'Gold'


function displayInfo(car){
  console.log(car.model); // Ferrari
  console.log(car.year);  // 2003
  console.log(car.colour) // Red
}

function changeInfo(car, colour){
  car.colour = colour // Gold
}