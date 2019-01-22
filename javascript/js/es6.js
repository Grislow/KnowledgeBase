/*==========================================================================
	VARIABLES DECLARATIONS WITH let AND const
==========================================================================*/
// ES5 -> var name = 'John Smith'

// const - block scoped constant, must be immediatly initialized
// let - block scoped variable(for example can reuse i in for loops)
// -> both are hoisted but are unavailable until declaration
// -> between entering scope and declaration they are in the temporal dead zone(where they are not available)

const me = 'Justin';
//me = 'Bob'; -> this would throw an error
if(true){
	//console.log(you) -> not available - in TDZ
	let you = 'You';
}
//console.log(me + you) -> this would throw an error, you is only accessible within the if statement.


/*==========================================================================
	BLOCKS AND IIFEs
==========================================================================*/

var newIIFE = (() => {
	const a = 0;
	let b = 1;
	return {
		getConst: function(){return a;},
		getLet: function(){return b;}	
	}
})();

{
	let a = 'this is private';
}

/*==========================================================================
	STRINGS
==========================================================================*/

let aName = 'Johny Boy';
const yearOfBirth = 1980;
function calcAge(year){
	return (new Date().getFullYear()) - yearOfBirth;
}

//template literal
console.log(`This is ${aName}. He was born on ${yearOfBirth} and is now
${calcAge(yearOfBirth)} years old.`);

//startsWith(str) ; endsWith(str) ; includes(str) ; repeat(num)
const str = `${aName} born on ${yearOfBirth}`;

console.log(str.startsWith('J')); //true
console.log(str.endsWith('Y')); //false -> case sensitive
console.log(str.includes('1980')); //true
console.log(`${aName} `.repeat(3));



/*==========================================================================
	ARROW FUNCTIONS
==========================================================================*/

const monthsENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthsPL = ['Styczen', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesien', 'Pazdziernik', 'Listopad', 'Grudzien'];

//With one argument braces can be ommited. 
let monthENGplus = monthsENG.map(el => `The month of ${el}`);
//With one line function body return is implicit and curly brackets can be ommited
let showENG = monthsENG.map((el,i) => `${i+1}: ${el}`);

//2 arguments, return object
const monthPLENG = monthsENG.map((el,i) => {
	return {EN: el, PL: monthsPL[i]}
});

//Arrow funciton have a lexical this variable(they inherit the this variable of the parent element)
//-bonus: ES5 workaround
//-interesting: method initialized with arrow function will get the this of the global object
var lexThisTest = {
	someText: 'Text in object',
	printES5: function() {
		console.log('Text in method ' + addTextES5());
		function addTextES5(){
			return this.someText; //undefined because 'this' in a function points to global object
		}
	},
	printES6: function() {
		console.log('Text in method ' + (() => {return this.someText})());
	},
	ES5WorkAround: function() {
		var self = this;
		console.log('Text in method ' + addTextES5());
		function addTextES5(){
			return self.someText; //works because methods this is stored in variable
		}
	},
	printArrow: () => {
		console.log('Text in method ' + (() => {return this.someText})());
	}
}

lexThisTest.printES5();
lexThisTest.printES6();	//will print out properly
lexThisTest.ES5WorkAround();
lexThisTest.printArrow();




/*==========================================================================
	DESTRUCTURING
	-allows seperating grouped data
==========================================================================*/
//Destructuring an array
const [country, population] = ['Poland', 38433600];
console.log(`${country}'s current population is ${population}`);


//Destructuring an object
const color = {
	a: 'lime',
	b: '#00FF00',
	c: '0, 255, 0'
}

const {a: colorName, b: colorHex, c: colorRGB} = color;

console.log(`${colorName}'s hex code is ${colorHex} and rgb is (${colorRGB})`);


//Destructuring returned data
function calcRetirement(year){
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age, retireIn] = calcRetirement(1989);

console.log(`If you are ${age} years old you will retire in ${retireIn} years`);


/*==========================================================================
	ARRAYS
==========================================================================*/
const boxes = document.querySelectorAll('.box');

//Convert node list to array
//->ES5 var boxArr = Array.prototype.slice.call(boxes);
const boxArr = Array.from(boxes);

setTimeout( function(){
	boxArr.forEach(box => box.style.backgroundColor = 'dodgerblue');
},5000
);

//Use continue/break in forEach() and map() thx to for of loop
for(const box of boxArr){
	if(box.className.includes('blue')){ //THIS IS ES7 -> includes works on arrays and array like objects
		continue;
	}
	box.textContent = 'Changed to blue';
}

//findIndex(func) -> allows passing a callback function to an indexOf() method
//find(func) -> allows finding an element through a function.
var ages = [12, 17, 19, 21, 10, 8];

console.log(ages.findIndex(el => el >= 18)); //but only returns the first found element(like indexOf)
console.log(ages.find(el => el >= 18));

var agesSum = ages.reduce((prev, cur) => prev + cur, 0); //second arg is the starter value
console.log('Sum of all ages is ' + agesSum);

/*==========================================================================
	THE SPREAD OPERATOR
==========================================================================*/
//Passing array as argument during function call instead of using apply(this, array)
function addFourNum(a, b, c, d){
	return a + b + c + d;
}
var nums = [1, 10, 100, 1000, 10000];

//ES5 -> var sum = addFourNum.apply(null, nums);
const sum = addFourNum(...nums); //will take first 4
console.log(sum);


//Joining arrays using spread operator
const digitEven = [0,2,4,6,8];
const digitOdd = [1,3,5,7,9];
const singleDigits = [...digitEven, 'can put element here' , ...digitOdd];

console.log(singleDigits);



/*==========================================================================
	REST AND DEFAULT PARAMETERS
==========================================================================*/
//REST PARAMETERS - ... notation, used in function declaration, allows specifying an array of arguments
// -arguments -> special object that contains all passed arguments and is accessible in all functions

//ES5
function isMinor(){
	console.log(arguments); //this is not an array
}

//ES6
function isMinorES6(limit, ...years){ //<- rest parameters
	years.forEach((year)=>console.log(year < limit)); //these are the arguments as an array
}

//DEFAULT PARAMETERS
function Maj(firstName, yearOfBirth, lastName = 'Maj', nationality = 'Polish'){
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}


/*==========================================================================
	MAPS
	-hashmaps -> stringsKey : arbitraryValue
	-ES5 -> used objects for creating hashmaps, keys were limited to strings
	-ES6 -> maps allow keys of any type(even functions or objects)
	-maps are a new object type
	-maps are iterable
==========================================================================*/

const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Try again');

//get(key) -> get value based on key 
console.log(`
${question.get('question')}
1. ${question.get(1)}
2. ${question.get(2)}
3. ${question.get(3)}
4. ${question.get(4)}
`);

//size -> property containing number of elements in map
console.log('Question map has '+question.size+' elements');

//delete(key) -> remove element with given key
question.delete(4);

//has(key) -> returns boolean value if passed key exists in map
console.log(question.has('correct'));

//is iterable
question.forEach((val, key) => {
	console.log(`The key ${key} is paired with value ${val}`);
});

for(let [key, value] of question.entries()){
	if(typeof(key) === 'number'){
		console.log(`The key ${key} is of type ${typeof key} and its value ${value} is of type ${typeof value}`);
	}
}

//clear() -> clears all elements from the map
question.clear();

/*==========================================================================
	CLASSES AND SUBCLASSES
	-syntactic sugar -> make inheritance easier
	-exact same thing as creating a function constructor and adding methods to its prototype,
	just cleaner and more readable
	-simplifies creating static methods
	-class definitions are not hoisted!
	-cannot add properties to classes - fortunatly inheriting properties through object is not a good practice
==========================================================================*/
//CLASS
class Person{

	constructor(firstName, lastName, job){
		this.firstName = firstName;
		this.lastName = lastName;
		this.job = job;
		this._id = Person.counter();
	}

	greetings(){
		console.log(`Hello, I am ${this.firstName} ${this.lastName}. I work as a ${this.job}.`);
	}

	getId(){
		return this._id;
	}

	static counter(){
		Person._counter = (Person._counter || 0) +1;
		return Person._counter;
	}

}

const greg = new Person('Gregory','Maj','Developer');
const matt = new Person('Matt', 'Damon', 'Actor');
greg.greetings();
greg.getId();
matt.getId();

//SUBCLASSES
class Developer extends Person {

	constructor(firstName, lastName, technologies, yearsOfExperience, job){
		super(firstName, lastName, job = 'Developer');
		this.technologies = technologies;
		this.yearsOfExperience = yearsOfExperience;
	}

	addYear() {
		this.yearsOfExperience++;
		console.log(`${this.firstName} ${this.lastName} now has ${this.yearsOfExperience} years of coding experience`);
	}  

}

const justin = new Developer('Justin', 'Code', ['Java', 'Python', 'C', 'Javascript', 'HTML5','CSS3'], 6);
console.log(justin);
justin.addYear();




/*==========================================================================
	PROMISES
	-object:
		1. Keeps track of when an event has happened
		2. Determines what is executed after the event happens
		3. Implements the concept of future value that we're exprecting
	-promise states:
		-PENDING -> initial state of promise
		-SETTLED/RESOLVED -> after the operation was finalized
		-FULFILLED -> operation was finalized succesfully
		-REJECTED -> operation was finalized unsuccessfully
	-PRODUCING a promise: create and send a result using the promise
	-CONSUMING a promise: using calback functions to handle fullfillment and rejection 
	-answer to callback hell
	-Promise(executor(resolve, reject) {
		...
		resolve(result);
	})
		-executor -> function that is immediatly called after the promise is created
		-resolve -> function called if promise successful
		-reject -> function called if promise unsuccessful
		-result -> result of promise if it was successful
	-Consumer methods(inherited by promises):
		-then(eventHandler(result)) -> function runs if promise is fullfilled, set event handler that takes the result as an arg
		-catch(eventHandler(error)) -> function runs if promise is not fullfilled, set event handler that takes the error msg as an arg
==========================================================================*/

//PRODUCING PROMISES
const getIDs = new Promise((resolve, reject) => { //Not defined as a function because no data is passed
	setTimeout(() => {
		resolve([523, 883, 432, 974]); //marks promise as resolved
		reject("Would execute if resolve() was omitted");
	}, 2000);
});

const getRecipe = recID => {	//Defined as function because recID needs to be passed as argument
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {title: 'Carrot Soup', publisher: 'Greg'};
			resolve(`${ID}: ${recipe.title}`)
		}, 1500, recID);
	});
};

const getRelated = publisher => {
	return new Promise((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {title: 'Smoked Salmon', publisher: 'Greg'};
			resolve(`${pub}: ${recipe.title}`);
		}, 1500, publisher)
	});
};

//CONSUMING PROMISES
getIDs 
.then(IDs => { 
	console.log(IDs);
	//getRecipe(IDs[2]).then() -> can nest it but that would again be callback hell - BAD PRACTICE
	return getRecipe(IDs[2]);
})
.then(recipe => { //this is chaining promises - it is possible because we returned a promise in the previous then() call
	console.log(recipe);  
	return getRelated('Greg');
})
.then(recipe => {
	console.log(recipe);
})
.catch(error => {
	console.log(error);
});

/*==========================================================================
	FETCH AND PROMISES
	-used instead of the more complex XML HttpRequest Interface(has better browser support then fetch)
	-Same Origin Policy in js => prevents making ajax requests to domains other the are own domain. Workarounds:
		-CORS(Cross-Origin Resource Sharing) - needs to be implemented on server that provides the API
		-PROXY REQUEST - proxy the request through own server(if website is not CORS-enabled)
		-crossorigin.me - for testing(do not use on production, service stability not quaranteed) - allows proxying without own server
		-cors-anywhere.herokuapp.com - like crossorigin.me
	-API Key - a unique id given to each user of an API - this way an API can track how many requests you make per day
	-fetch doesnt work in all browsers
==========================================================================*/
//append API url with 'https://crossorigin.me/' or 'https://cors-anywhere.herokuapp.com/'
//fetch() is a good example of why you usually consume promises and not request them

function getWeather(woeid){
	fetch(`http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
	.then((result) => {
		//console.log(result);
		return result.json(); //parse the json data to a javascript object
	})
	.then((data) => {
		//console.log(data);
		const today = data.consolidated_weather[0];
		const degrees =  String.fromCharCode(176);
		console.log(`Today on ${today.applicable_date} in ${data.title} the highest temperature will be ${today.max_temp.toFixed(0)+degrees}C and the lowest ${today.min_temp.toFixed(0)+degrees}C`);
	})
	.catch((error) => console.log(error));	
}

getWeather(2487956);


/*==========================================================================
	NATIVE MODULES
	-ES6 Modules:
		-native js -> better performance(less layers of communication)
		-imported asynchronously(but babel/wbepack makes imports them synchronously)
			-which means it can be a little faster
		-there is an api in development for dynamic loading
		-named imports for selective loading pieces of modules
	-Common JSm MOdules:
		-so far the standard for Node.js modules
		-imported synchronously
		-allows dynamic loading(conditional import, name not bound to module)
==========================================================================*/

//ES6 MODULES
//import/export default
export default 'Some data' //usefull when you want to export one thing
import str from './directory/fileName'; //import from single export module

//import/export multiple vars
export const add = (a,b) => a + b;
export const multiply  = (a,b) => a * b;
export const ID = 20;

import {add as a, multiply} from './directory/fileName';

//import everything
//import * as something from './views/name';
//something.someFunc();


//NON STANDARD EXPORT/IMPORT - COMMON.JS
var someLib = require('someLib');

module.exports = {
	model: mongoose.model("Post", postSchema),
	schema: postSchema	
};
