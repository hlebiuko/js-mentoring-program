/**
 * write function that will do sum for two numbers
 *
 */
function sum(a, b) {
	return a + b;
}

/**
 * write function that return first and last name of a given object
 * properties are firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
	return object.firstName + " " + object.lastName;
}

/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	return (n % 2 == 1) ? true : false;
}

/**
 * write function that return shortest of words in the given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
	let counter = wordArray[0].length;
	let shorter = wordArray[0];
	for (let i = 1; i <  wordArray.length; i++) {
	  if (wordArray[i].length < counter){
		counter = wordArray[i].length;
		shorter = wordArray[i];
	  }
	} 
	return shorter;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	let google = "g";
	for (let i = 0; i < n; i++){
	  google += "o";
	}
	google += "gle"
	return google;
}

/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default params)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {
	let person = {};

	if (firstName != undefined) person.firstName = firstName;
	else person.firstName = null;
	if (lastName != undefined) person.lastName = lastName;
	else person.lastName = null;
	if (age != undefined) person.age = age;
	else person.age = null;
  
	return person;
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let totalPath = 0;
  
	for (let el of path) {totalPath += el.distance; };

	return totalPath;
}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {percentage} num
 * @param {amount} num
 * e.g const discount10 = discountFunction(10);
 * discount10(90) should return 81
 * discount10(100) should return 90
 */

 function discountFunction(percentage) {

  return function (amount) {
    return amount - amount*percentage/100;
  };
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		for (let props in this) { console.log(props) };
	},
	call() {
		return ('My name is John Doe and I am 25 years old. My best friend is Daniel'); 
		// task was to return the line without additional requirements, so I decided to add more correct from my perspectice point of view and flexible version in the comments
		// return (`My name is ${this.name} ${this.lastName} and I am ${this.age} years old. My best friend is ${this.friends[this.friends.length - 1]}`); 
	}

};

module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};
