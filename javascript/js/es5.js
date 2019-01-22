/*==========================================================================
	VARIABLES AND DATA TYPES
==========================================================================*/

//String
var firstName = 'Grzegorz';
var lastName = 'Maj';

//Number
var age = 28;
var $height = 1.87;

//Boolean
var _canCode = true;

//undefined
var futureHolds;

//null
var modesty = null;

//Weakly Typed
var monthsOld = "12" * 28; //does not throw error, return type is Number

//Dynamic Typing
$height = null;
$height = "tall";

//Type Coercion
var info = firstName + ' ' + lastName + ' is '+age+' years old';

//Variable Mutation
age = 'twenty eigth';

//Falsy values - evaluated to false => undefined, null, 0, '', NaN
//Truthy values - evaluated to true => everything else


/*==========================================================================
	BASIC METHODS
==========================================================================*/
//prints to console
console.log(age, $height);
//prints and shows in popup
alert('What does the future hold? '+futureHolds);
//prompts for user input
prompt('Who are "you"?');
//Convert string into integer - optional second argument which is the base(allows parsing binary values)
parseInt('28px'); //returns 28
parseInt('1010', 2); //returns 10
parseInt('1.12123'); //returns 1
parseFloat('1.2123123') //returns 1.2123123
parseFloat('1.0912someText') //returns 1.0912
Number('1034'); //returns 1034
Number('28px'); //returns NaN
Number('0b1010'); //returns 10
Number('0xFF'); //returns 255


/*==========================================================================
	OPERATORS
==========================================================================*/
var op = (2 - 4) * 2 / 10;
var isOld = 28 > 100;
var isOldType = typeof isOld; //use typeof with primitives -  since they are not instances of any object
var a, b, c;
a = b = c = 10; //works because of operator associativity - assignment is right to left
op *= 2;
op++;
--op;
5 == '5'; //true
5 === '5'; //false
true || false; // true
true && false; // false


/*==========================================================================
	BASIC CONTROL FLOW
==========================================================================*/
//if, else if, else
if($height || $height === 0){
	console.log('Variable is defined');
}else if($height || $height === 1){
	console.log('This wont execute');
}else{
	console.log('Variable is not defined');
}

//____________________________________________________________________________
//Ternary Operator
var age = 18;
(age >= 18) ? console.log("Of age") : console.log("Minor");

//____________________________________________________________________________
//Switch
switch(lastName){
	case "Smith": console.log('That\'s pretty generic'); break;
	case "John": console.log('Are you sure that\'s not your first name?'); break;
	case "Code": console.log('That\'s a cool last name!'); break;
	default: console.log('Yeah\nWhatever');
};



/*==========================================================================
	ARRAYS
==========================================================================*/
//Initializing an Array
var randomThings = ['12', 3, 3.5, 'Javascript'];

var moreThings = new Array(10101, randomThings.length);

var emptyArray = [];

var people = [
	{firstName: 'George', lastName: 'Washington',yearOfBirth: 1732},
	{firstName: 'John', lastName: 'Adams', yearOfBirth: 1735},
	{firstName: 'Thomas', lastName: 'Jefferson', yearOfBirth: 1743},
	{firstName: 'James', lastName: 'Madison', yearOfBirth: 1751},
	{firstName: 'James', lastName: 'Monroe', yearOfBirth: 1758},
	{firstName: 'Justin', lastName: 'Code', yearOfBirth: 1989}
];

//____________________________________________________________________________
//Mutate Array Data

randomThings[1] = 'not 3 anymore';

moreThings[5] = 'Coding';

//____________________________________________________________________________
//Array Methods
randomThings.push('inserts at end of array');
var LastItem = randomThings.pop(); //returns last item and removes from array
randomThings.shift('inserts at beginning of array');
var FirstItem = randomThings.unshift(); //returns first item and removes from array
var indexOfItem = randomThings.indexOf('Javascript'); //returns -1 if non-existant



/*==========================================================================
	FUNCTIONS
	-are instances of Object type(behave like any other object)
	-First class functions - can be stored in variables, passed to another function, returned by function
==========================================================================*/
//Hoisting
printSomething("This wont throw an error because function definitions are known before execution");
//isEven(4); -> throws error - hoisting only works with declarations, not expressions
console.log(me); //variable declarations are also hoisted, but there value is set to undefined

//Function Statements
function printSomething(string){
	console.log(string);
}

function howManyMonths(years){
	return years*12;
}

function isMe(person){
	printSomething(person.firstName+' '+person.lastName);
	return person.firstName === 'Justin' &&  person.lastName === 'Code';
}

//Function Expressions
var isEven = function(num){
	return num % 2 === 0;
}

//____________________________________________________________________________
//First class functions - because they behave like objects(are objects) and objects are first class citizens in the language
//passing as arg
function changeAndReturn(arr, fn){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		newArr.push(fn(arr[i].yearOfBirth));
	}
	return newArr;
}

var presidentsMonthsAgo = changeAndReturn(people, howManyMonths);

//returning a function
function changeProp(prop){
	if(typeof prop === 'number'){
		return function(num){
			console.log('The square of '+num+' is '+num**2+' and the square root is '+Math.sqrt(num));
		}
	} else if(typeof prop === 'string'){
		return function(str){
			var rev = str.split('').reverse().join('');
			console.log('"'+str+'" reversed is "'+rev+'"');
		}
	} else {
		console.log("Unhandled variable type");
	}
}

changeProp('string')('abcdefghijklmnopqrstuvwxyz');
changeProp(0)(4);

//____________________________________________________________________________
//Immediately Invoked Function Expressions(IIFE)
//-an anonymous function written as an expression and immediatly invoked to trick the js interpreter
//-used for:
// 	-data privacy -> the inner variables are not accessible outside of its scope
//	-avoid polluting the global namespace
//-not meant to be reusable
(function () {
	var randomNumber = Math.random() * 10;
	console.log(randomNumber >= 5);
})();

(function(num){
	var randomNumber = Math.random() * 10;
	console.log(num*randomNumber);
})(5);

//____________________________________________________________________________
//Closures - a function that has an environment of its own
//-closures work because the enclosing functions variable object is still available in memory therefor the scope chain stays in tact
//-an inner function always has access to the variables and parameters of the outer funtion even after the outer function has finished execution
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age)+a);
	}
}

var retirementEU = retirement(65);
retirementEU(1989);
retirement(70)(1989);

function interviewQuestion(job){
	return function(name){
		switch(job){
			case 'designer': console.log(name + ', can you please explain what UX design is?'); break;
			case 'teacher': console.log('What subject do you teach, '+ name + '?'); break;
			default: console.log('Hello ' + name + ', what do you do?');
		}
	}
}

var designerInterview = interviewQuestion('designer');
var teacherInterview = interviewQuestion('teacher');
var unknownInterview = interviewQuestion('broker');

designerInterview('John');
teacherInterview('Greg');
unknownInterview('Melanie');


//Currying - breaking down a function that takes multiple arguments into multiple functions that take a part of the arguments
function add(x, y){
	return x+y;
}

function concat(str1, str2){
	console.log(str1 + ' ' + str2);
}

var toTen = add.bind(this, 10);
var strPlus = concat.bind(this, 'A string and ');

toTen(20); //30
strPlus('another string'); //'A string and another string'




/*==========================================================================
	OBJECTS
==========================================================================*/
//Creating an Object
var me = {
	firstName: 'Justin',
	lastName: 'Code',
	favNumber: '1',
	favColors: ['Blue', 'Black', 'White'],
	sayMyName: function(){
		console.log('My name is '+this.firstName+' '+this.lastName);
	}
};

var you = new Object();

var someone = new Object({
	firstName: "John",
	lastName: "Smith"
});

//Accessing Properties
var myName = me.firstName;
var myFavNum = me['favNumber'];
me.favColors.pop();
me['favNumber'] =  2;

//____________________________________________________________________________
//Set Properties
you.name = prompt('What is your name?');
you['favNum'] = prompt('What is your fav number?');
you.favColor = 'blue';

//Methods
var isDivisible = {
	byTwo: function(num){
		return num%2 === 0;
	},
	byThree: function(num){
		return num%3 === 0;
	},
	byFour: function(num){
		return num%4 === 0;
	}	
}

//____________________________________________________________________________
//This keyword
console.log(this); //in browser will represent the Window

function thisExample(){
	console.log(this); //will also represent the Window
}

var anObject = {
	someField: "An object field",
	thisExample: function()
	{
		console.log(this); //represents the anObject Object

		function inner(){
			console.log(this); //will again represent Window since inner is not a method but a function
		}

		inner();
	}
}

//Method borrowing
anObject.byTwo = isDivisible.byTwo; //anObject now has the byTwo method

//____________________________________________________________________________
//Function Constructor
//-new creates an empty object and a respective execution context with the this keyword
var Person = function(name, age, canCode){
	this.name = name;
	this.age = age;
	this.canCode = canCode;
}

var me2 = new Person('Justin Code', 28, true);

//Adding to constructor prototype property
Person.prototype.isMe = function(){
	return this.name === "Justin Code";
}

Person.prototype.isPerson = true;

//Referencing the prototype property of an object
me2.__proto__;
Person.prototype;

//Check if object has own property
me2.hasOwnProperty('isPerson'); //false
me2.constructor.hasOwnProperty('name'); //true
me2.__proto__.hasOwnProperty('isPerson'); //true

//Check if object has a property
'name' in me2

//Check if object is instance of a class
me2 instanceof Object //ture

//____________________________________________________________________________
//Object.create(prototype, properties) method
//-allows specifying exactly which properties should be in the prototype
var reena = Object.create({
	//the prototype, usually will create prototype object beforehand for reuse
	someFunction: function(){
		console.log("a function that is in the prototype");
	}
},{
	species: {value: 'Dog'},
	breed: {value: 'Mixed'}
});

//____________________________________________________________________________
//Difference between primitives and objects
//-primitive varialbe -> stores actual value
//-object variable -> stores reference to where the object is in memory
var primitive = 10;
var anObject = {number: 20};
var anotherObject = anObject;
anotherObject.number = 30; //anotherObject is actually a reference to anObject, so both numbers will be 30

function change(a, b){
	a = 123123123;
	b.number = 10000;
}

change(primitive, anObject); //will not change primitive, will change anObject

//____________________________________________________________________________
//call(this_object,[method_arg]...) - allows calling a method of an object on behalf of another object
//apply(this_object,[array of arguments]..) - same as call but allows passing an array as method arguments
me.sayMyName.call(you);

//bind(this_object, [method_arg]...) - allows binding a function call to an argument. This is currying
var tenByTwo = isDivisible.byTwo.bind(isDivisible, 10);
tenByTwo();
//____________________________________________________________________________

//Inheritance

//creating the subclass constructor
var Coder = function(name, age, canCode, technologies, yearsOfExperience){
	//call the empty Coder object using the Person constructor
	Person.call(this, name, age, canCode);
	this.technologies = technologies;
	this.yearsOfExperience = yearsOfExperience;
}

//linking the prototype chain
Coder.prototype = Object.create(Person.prototype);


/*==========================================================================
	LOOPS
==========================================================================*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//While Loop
var i = 0;
var sum = 0;
while(i < array.length){
	console.log('Iteration number '+i+' and sum equals '+sum);
	sum += array[i++];
	if(i === array.length){
		console.log('Finally sum is: '+sum);		
	}
}

//____________________________________________________________________________
//For Loop
for(var i = 0, product = 1; i < array.length; i++){
	if(i === 0){
		continue;
	}

	product *= array[i];
	console.log('Iteration number '+i+' and product equals '+product);

	if(i === array.length-2){
		console.log('Finally product is: '+product);		
		break;
	}
}

//____________________________________________________________________________
//For Each
var quotient = array[0];
array.forEach(function(num, ind, arr){
	if(ind === 0){
		console.log("Array: "+arr);
	}
	quotient /= num;
	console.log('Iteration number '+ind+'. Quotient equals '+quotient);
});

/*==========================================================================
	ASYNCHRONOUS CODE
==========================================================================*/
let countAsync = 0;

const async = () => {
	setTimeout(() => {
		console.log('...2s later');
		console.log(++countAsync);
	}, 2000);
}

const first = () => {
	console.log('First line of function');
	async();
	async();
	async();
	console.log('After async()');
}

first();

