import characters from "../assets/starwars.json";
import hello from "../assets/hello.json";

export default function Arrays() {
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
	return (
		<div>
			<h2>Arrays</h2>
			{characters.map((character) => {
				return <p>{character.name}</p>;
			})}
		</div>
	);
}
