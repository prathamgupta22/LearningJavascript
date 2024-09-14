// Define the 'vehicle' object which will act as the prototype for 'car'
let vehicle = {
  wheels: "4", // Number of wheels
  fuelType: "Gasoline", // Type of fuel
  color: "Green", // Color of the vehicle
};

// Define 'carProps' object with properties to be added directly to 'car'
let carProps = {
  type: {
    value: "Volks", // The type of the car (e.g., make or brand)
    enumerable: true, // Make this property enumerable so it shows up in for...in loops
  },
  model: {
    value: "Golf", // The model of the car
    enumerable: true, // Make this property enumerable so it shows up in for...in loops
  },
};

// Create a new object 'car' that inherits from 'vehicle'
// 'car' will have 'type' and 'model' properties defined by 'carProps'
var car = Object.create(vehicle, carProps);

// Iterate over all properties of 'car', including inherited ones
for (let prop in car) {
  if (car.hasOwnProperty(prop)) {
    // If 'prop' is an own property of 'car' (i.e., not inherited), log it
    console.log(prop + ": " + car[prop]);
  } else {
    // If 'prop' is inherited from 'vehicle', log it as well
    console.log(prop + ": " + car[prop]);
  }
}

//to print car props array make it enumerable
// vehicle Object: This is the prototype object that car will inherit properties from. It has properties wheels, fuelType, and color.
// carProps Object: This object is defining the properties (type and model) to be added directly to car. The properties are defined with an additional value key, and by default, properties defined this way are non-enumerable, non-writable, and non-configurable unless explicitly specified.
// Object.create: This method creates a new object (car) that inherits from vehicle and has properties defined by carProps.
// Why is car giving an empty {}?
// When you log car to the console: // Inherited Properties: The properties inherited from vehicle (like wheels, fuelType, and color) are not shown in the output of console.log(car) because they are on the prototype chain, not directly on the car object itself.
// Non-enumerable Properties: The properties defined in carProps are non-enumerable. When you log an object, only enumerable properties are shown by default. // Definition: A non-enumerable property is one that does not appear in iterations over the object’s properties. Such properties are essentially "hidden" from for...in loops and methods like Object.keys() unless you explicitly access them by their name. // Setting Non-enumerable Properties: Non-enumerable properties are often defined using Object.defineProperty() with the enumerable attribute set to false. Many built-in properties in JavaScript (like length in arrays) are non-enumerable by default. // // Why Are Some Properties Non-enumerable? // Built-in Properties: JavaScript objects often have built-in properties (like length on arrays, or prototype on functions) that are non-enumerable. This is because these properties are part of the object’s internal mechanism and aren’t usually needed when iterating over the object’s own properties. // Controlling Property Visibility: Developers might use non-enumerable properties to create "hidden" properties that shouldn’t be exposed during object iteration, for encapsulation or other design reasons. // for (let prop in car) { //   if (!car.hasOwnProperty(prop)) { //     console.log(prop + ": " + car[prop]); //   } // } var car = Object.create(vehicle, carProps); for (let prop in car) { if (car.hasOwnProperty(prop)) { console.log(prop + ": " + car[prop]); // Directly access the value for own properties } else { console.log(prop + ": " + car[prop]); // Inherited properties } }
