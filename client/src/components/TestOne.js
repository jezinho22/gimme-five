import React from "react";

export default function TestOne() {
	const x = `
    let a = 0; 
    if (a) {
        console.log("True or true enough - evaluates to true")
    } else if (a != true) {
        console.log("False or not true enough - evaluates to false")
    } else {
        console.log("Weird. Everything should evaluate to true or false!")
    }`;
	return (
		<div className="code-space">
			<pre>
				<code>{x}</code>
			</pre>
			<div className="output-div">Hardy har har</div>
		</div>
	);
}
