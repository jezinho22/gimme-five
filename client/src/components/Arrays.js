// console.log("Hiya")

// const myArr = ["Dominique", "Catalina", "Erica","Alicia"]
// for (let x in myArr) {
//   console.log(`Hiya ${myArr[x]}! via for in`)
// }

// for (let i = 0; i< myArr.length;i++){
//     console.log(`Hiya ${myArr[i]}! via for loop`)
// }

// myArr.map(function(person){
//   console.log(`Hiya ${person}! via .map`)
// })

// function hiya(person){
//   console.log(`Hiya ${person}! via forEach`)
// }
// hiya("Eric")

// myArr.forEach(hiya)

const planets = [
	[
		"Mars",
		"Terrestrial planet",
		0.642,
		6792,
		3933,
		3.7,
		24.7,
		227.9,
		-65,
		2,
		"The red planet",
	],
	[
		"Mercury",
		"Terrestrial planet",
		0.33,
		4879,
		5427,
		3.7,
		4222.6,
		57.9,
		167,
		0,
		"Closest to the Sun",
	],
	[
		"Venus",
		"Terrestrial planet",
		4.87,
		12104,
		5243,
		8.9,
		2802.0,
		108.2,
		464,
		0,
		"",
	],
	[
		"Earth",
		"Terrestrial planet",
		5.97,
		12756,
		5514,
		9.8,
		24.0,
		149.6,
		15,
		1,
		"Our world",
	],
	[
		"Jupiter",
		"Gas giant",
		1898,
		142984,
		1326,
		23.1,
		9.9,
		778.6,
		-110,
		67,
		"The largest planet",
	],
	["Saturn", "Gas giant", 568, 120536, 687, 9.0, 10.7, 1433.5, -140, 62, ""],
	["Uranus", "Ice giant", 86.8, 51118, 1271, 8.7, 17.2, 2872.5, -195, 27, ""],
	["Neptune", "Ice giant", 102, 49528, 1638, 11.0, 16.1, 4495.1, -200, 14, ""],
	[
		"Pluto",
		"Dwarf planet",
		0.0146,
		2370,
		2095,
		0.7,
		153.3,
		5906.4,
		-225,
		5,
		"Declassified as a planet in 2006, but this remains controversial",
	],
];

let headings = [
	"Name",
	"Type",
	"Mass(10<sup>24</sup>kg)",
	"Diameter(km)",
	"Density(kg/m<sup>3</sup>)",
	"Gravity(m/s<sup>2</sup>)",
	"Lengthofday(hours)",
	"DistancefromSun(10<sup>6</sup>km)",
	"Meantemperature(°C)",
	"Numberofmoons",
	"Notes",
];

const planetArray = [];
let thing = {};

for (let i = 0; i < planets.length; i++) {
	thing = {};
	for (let j = 0; j < headings.length; j++) {
		thing[headings[j]] = planets[i][j];
	}
	planetArray.push(thing);
}

planetArray.map((planet) => {
	console.log(`${planet.Name} is a ${planet.Type}`);
});

console.log(planetArray.map((planet) => [...planet.Type]));
