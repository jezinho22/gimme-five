// Try putting different things into a - can you predict what each will give?
// Can you get the "Weird" response?

// You could try NaN, null, your name, any string, 0, 1, any number, or even undefined (let a;)

let a = 0;

if (a) {
	console.log("True or true enough - evaluates to true");
} else if (a != true) {
	console.log("False or not true enough - evaluates to false");
} else {
	console.log("Weird. Everything should evaluate to true or false!");
}
