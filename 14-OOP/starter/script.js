'use strict';
//Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcage = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
//1.New empty {} is created
//2.funct is called, this = {}
//3.{} linked to prototype
//4.function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(jonas instanceof Person); // true

Person.hey = function () {
  console.log(`Hey there`);
  console.log(this);
};

Person.hey();

///////////////////////////////////////////
//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 3, 3, 3, 8, 4, 2]; // new Array === []
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // true

//Shouldn't do that
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(x => x + 1);

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


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  return console.log((this.speed -= 5));
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1);
console.log(car2);
car1.accelerate();
car1.accelerate();
car1.accelerate();

car2.brake();
*/
//////////////////////////////////////////////
//ES6 Classes

//class expression
// const  PersonCl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthDate) {
    this.fullName = fullName;
    this.birthDate = birthDate;
  }

  //Method will be addet to the prototype property
  calcAge() {
    console.log(2037 - this.birthDate);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthDate;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Hey there`);
  }
}

const dasha = new PersonCl('Dasha Luneva', 1997);
console.log(dasha);
dasha.calcAge();
console.log(dasha.age);

console.log(dasha.__proto__ === PersonCl.prototype);

//Work the same as inside a class
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
dasha.greet();

/////////////////////////////////////////////
//Setters and Getters
const account = {
  owner: 'jonas',
  movements: [200, 580, 390, 389],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

/////////////////////////////////////////////
//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthDate);
  },

  init(firstName, birthDate) {
    this.firstName = firstName;
    this.birthDate = birthDate;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthDate = 2000;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1990);
sarah.calcAge();
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    return console.log((this.speed += 10));
  }

  brake() {
    return console.log((this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);
ford.speedUS = 40;
console.log(ford);
*/

////////////////////////////////////////////
//Inheritance Between "Classes": Constructor Functions

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, I'm studying ${this.course}`);
};

const mike = new Student('Mike', 1997, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  return console.log((this.speed -= 5));
};

const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////
//Inheritance Between "Classes": ES6 Classes
class Person2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Method will be addet to the prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthDate;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Hey there`);
  }
}

class Student2 extends Person2 {
  constructor(fullName, birthYear, course) {
    //Always needs to happen
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName}, I'm studying ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new Student2('Martha Smith', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

///////////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthDate);
  },

  init(firstName, birthDate) {
    this.firstName = firstName;
    this.birthDate = birthDate;
  },
};

const esma = Object.create(PersonProto1);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthDate, course) {
  PersonProto.init.call(this, firstName, birthDate);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}, I'm studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
console.log(jay);
jay.calcAge();
*/
/////////////////////////////////////////
//Another Class Example

//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods

class Account {
  //1) Public field(will be added only on instances, not on prototype)
  locale = navigator.language;

  //2) Private fiels(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening new account, ${this.owner}`);
  }

  //3) Public methods

  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requiestLoan(val) {
    if (this._approveLoan) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('dhhf');
  }

  //4) Private methods
  // #approveLoan() {
  _approveLoan() {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//Not a good idea to manipulate an Arr like this:
// acc1.movements.push(250);
// acc1.movements.push(-10);

acc1.deposit(259);
acc1.withdraw(29);
acc1.requiestLoan(300);
console.log(acc1.getMovements());
console.log(acc1);

//console.log(acc1.#movements);
/////////////////////////////////////////
//Encapsulation: Protected Properties and Methods

//Public fields
//Private fields
//Public methods
//Private methods

/////////////////////////////////////////
//Chaining Methods
acc1.deposit(3000).deposit(22).withdraw(678).requiestLoan(34567).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    this.speed -= 5;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends Car {
  #charge;
  constructor(brand, speed, charge) {
    super(brand, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.brand} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate().brake().chargeBattery(4).accelerate().accelerate();
console.log(rivian);
