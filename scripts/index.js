

//var word_db = ['elem_0']; //Array of word pair objects
var word_db = []; //Array of word pair objects
function SaveData() {
//	alert("SaveData");
	console.log("SaveData");
	let english = document.getElementById("english");
	let spanish = document.getElementById("spanish");

	console.log(english.value);
	
	let o = { "eng":english.value, "spa":spanish.value };
	console.log(JSON.stringify(o));
	console.log(localStorage.length);
	localStorage.setItem("LearnLangs-pair" + localStorage.length, JSON.stringify(o));
}

function LoadData() {
	//wordPair = localStorage.english;
}

function MoveToDb() {
	let itemCount = localStorage.length - 1; //LearnLangs-DB takes the first place
//	word_db = { "eng":"cat", "spa":"gato"};
//	localStorage.setItem("LearnLangs-DB", JSON.stringify(word_db));


// Convert JSON into a JavaScript object:
/*var myObj = JSON.parse(myJSON);

myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
*/

/*
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
*/
console.log(typeof(word_db));
console.log("0=" + word_db[0]);

	for ( i = 1; i <= itemCount; i++ ) {
		pairKey = "LearnLangs-pair" + i;
		wordPair = localStorage.getItem(pairKey);
		console.log("pairKey=" + pairKey);
		console.log("wordPair=" + wordPair);
		//Add new items after existing ones into the db
		dbLength = word_db.length;
		word_db.push(wordPair);
	}
			console.log("word_db=" + word_db);
	localStorage.setItem("LearnLangs-DB", word_db);

}