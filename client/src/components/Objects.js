// object literals - literally they are the basic way to write an object - notice the = sign because they are a variable-type (like strings and arrays and numbers are); and notice the curly brace, the colon and the comma. Finally, notice the function called sayHello - and how it is fitted into the object. Like this it is called a method of the object.

const obj1 = {
	name: "Jez",
	age: "12",
	height: "1.8m",
	sayHello: function () {
		console.log("Hello " + this.name);
	},
};

// try these - type them in the console:
// console.log(obj1.age)
// obj1.sayHello()

const obj2 = {
	name: "Rich",
	age: "14",
	height: "1.8m",
	sayHello: function () {
		console.log("Hello " + this.name);
	},
};

const obj3 = {
	name: "Tim",
	age: "16",
	height: "1.8m",
	sayHello: function () {
		console.log("Hello " + this.name);
	},
};
// obj3.sayHello()

const obj4 = {
	name: "Andrea",
	age: "12",
	height: "1.6m",
	sayHello: function () {
		console.log("Hello " + this.name);
	},
};

// let's make all of that above with a constructor function
// constructor functions are a way to easily make objects when you have the data

function ObjectDemo(name, age, height) {
	this.name = name;
	this.age = age;
	this.height = height;
}

// notice that it is a function; notice the parameters in the brackets which let you tell the function your info; notice the keyword this. ; and notice how this. takes in the parameters to give to the object as properties

// you could add the method here as well, like this.sayHello = function (){ console.log("Hello " + this.name) }

// but good practice is to use a prototype ...

// Use prototype to add method:

ObjectDemo.prototype.sayHello = function () {
	console.log("Hello " + this.name);
};

// create a load of objects quickly
const obj01 = new ObjectDemo("Jez", "23", "1.8m");
const obj02 = new ObjectDemo("Sam", "23", "1.8m");
const obj03 = new ObjectDemo("Rich", "23", "1.8m");
const obj04 = new ObjectDemo("Tim", "23", "1.8m");
const obj05 = new ObjectDemo("Chris", "23", "1.8m");

// inspect an object
//console.log(obj04)

// see if their sayHello methods work:
// obj01.sayHello()
// obj05.sayHello()

// ideas for more examples:

objAlbum = {
	artist: "XXX",
	albumTitle: "YYYY",
	year: "1968",
	track01: "vvvv",
	track02: "bbbb",
};

objMovie = {
	title: "",
	genre: "",
	duration: "",
	releaseDate: "",
	cast: {
		aaa: "",
		bbb: "",
	},
	rottenTomatoRating: "",
};

objStarWars = {
	name: "",
	orientation: "",
	light_saber_colour: "",
	mind_trick: function () {
		console.log(
			"These are not the droids we are looking for. You may go about your business, " +
				this.name
		);
	},
};

objComputer = {
	make: "",
	model: "",
	os: "",
	ram: "",
	storageType: "",
	storageCapacity: "",
	screenSize: "",
};

objPaint = {
	type: "",
	colour: "",
	dryingTime: "",
	entertainmentValue: "",
};

// make constructor functions for the example objects like this
function Computer(
	make,
	model,
	os,
	ram,
	storageType,
	storageCapacity,
	screenSize
) {
	this.make = make;
	this.model = model;
	this.os = os;
	this.ram = ram;
	this.storageType = storageType;
	this.storageCapacity = storageCapacity;
	this.screenSize = screenSize;
}
// make one and have a look
// const comp1 = new Computer("Dell", "500", "windows 11", "16Gb")
// console.log(comp1)
