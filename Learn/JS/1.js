var number = 1;
console.log(number, "\n");

//array Operation

let temp = 0;
let array = [1, 2, 3, 4];
console.log("Array Length: ", array.length, "\n");
for (temp in array) {
  console.log(array[temp]);
}

//String Operations

let str = "Udhaya";
console.log(
  "\nString Examples:",
  str,
  str.length,
  str.toUpperCase(),
  str.toLowerCase(),
  "\n"
);

//Normal Function
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("factorial of 5 is ", factorial(5));

//One line Conditions

function fact(n) {
  return n < 2 ? 1 : n * fact(n - 1);
}

console.log("\nfactorial of 7 is ", fact(7));

//Arrow Function
const cube = (n) => n * n * n;

console.log("\ncube of 8 is", cube(8));

//Objects
let data = {
  id: 1,
  name: "goku",
  age: 20,
};
console.log(data);
data.height = "180cm";
console.log(data);
console.log(data.hasOwnProperty("height"));

let data_str = ``;
for (let i in data) {
  data_str += "data[" + i + "] : " + data[i] + "\n";
}
console.log(data_str);

//function in object
obj = {
  id: 1,
  add_fun: (list) => list.reduce((total, item) => total + item),
};
list1 = [1, 2, 3, 4, 5, 6];
console.log(obj.add_fun(list1));
data2 = Object.create(data);
data2.id = 2;
data2.name = "Ben";
data2.fun = function () {
  return this.name + " " + this.age + " " + this.id;
};
console.log(data2, data2.fun());

const Manager = {
  name: "Carl",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log("Hello, my name is", this.name);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi();
Intern.sayHi();

console.log(Manager.hasOwnProperty("name"));
delete Manager.name;
console.log(Manager.hasOwnProperty("name"));

let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});

let myArray = new Array("1", "2", "3");
myArray = myArray.concat(["a", "b", "c"]);
console.log(myArray);

function Employee(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.status = false;
}

Employee.prototype.login = function () {
  this.status = true;
  console.log(this.email, "logged in");
};
Employee.prototype.logout = function () {
  this.status = false;
  console.log(this.email, "logged out");
};

function Manager1(...args) {
  Employee.apply(this, args);
  this.role = "Manager";
}

Manager1.prototype = Object.create(Employee.prototype);
Manager1.prototype.__proto__.applyLeave = function () {
  console.log(this.name, "break time");
};
Manager1.prototype.addWork = function () {
  console.log("New Work added");
};

var emp1 = new Employee(2, "john", "john@example.com");
var emp2 = new Employee(3, "jack", "jack@example.com");
var admin = new Manager1(1, "joe", "joe@example.com");
console.log(emp1);
emp1.login();
console.log(emp1.status);
emp1.logout();
console.log(emp1.status);
console.log(admin);
admin.login();
console.log(admin.status);
admin.logout();
admin.applyLeave();
emp1.applyLeave();
admin.addWork();

var nums = [6, 7, 8];
var iterator = nums[Symbol.iterator]();
var result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

function* myGenerator() {
  yield "foo";
  yield "bar";
  yield "baz";
}

myGenerator.next(); // Returns {value: 'foo', done: false}
myGenerator.next(); // Returns {value: 'bar', done: false}
myGenerator.next(); // Returns {value: 'baz', done: false}
myGenerator.next();
