'use strict';

// Constructor Function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const chanin = new Person('Chanin', 2000);

// Prototype Methods

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log('this.speed: ', this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log('this.speed: ', this.speed);
};

const BMW = new Car(null, 120);
const Mercedes = new Car(null, 95);

///////////////////////////////////////

// Class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const sun = new PersonCl('Chanin', 2000);

// Setters and Getters

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 600;
console.log(account.latest);
