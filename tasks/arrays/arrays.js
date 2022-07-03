const { indexOf } = require("./test/expected_names");

/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
	let arrWithChars = [];
	// for (let value in chars) {
	// 	arrWithChars.push (chars[value].name); 			//left this variant as a comment just because I can :) 
	// }
	chars.forEach(value => {
		arrWithChars.push (value.name);
	});

	return arrWithChars;
}


/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
	chars.forEach(value => console.log(value.name));
}

/**
 * return an array of non-human (species !== 'human') characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
	let arrWithChars = [];

	chars.forEach(value => {
		if (value.species.toLowerCase() !== 'human') {   //.toLowerCase was used to fir the task regarding check  (species !== 'human') and json file the is only "Human" recordings (with capital H)
			arrWithChars.push(value);
		}
	});
	
	return arrWithChars;
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
	return chars.find(value => value.name == 'Jerry Smith');
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
	// let checkker = true;
	
	// chars.forEach(value => {
	// 		if (value.species.toLowerCase() !== 'human') {		// another working variant
	// 			checkker = false;
	// 		}
	// });
	
	// return checkker;

	for (let value in chars) {
		if (value.species !== 'Human'){
			return false;
		}
	}
	return true;
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
	let checkker = false;
	
	chars.forEach(value => {
			if (value.type == 'Fish-Person') {
				checkker = true;
			}
	});
	return checkker;

	// for (let value in chars){				// why it's not working ?
	// 	if (value.type == "Fish-Person") {			
	// 		return true;
	// 	}
	// }
	// return false;
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
	let minValue = arr[0];
	let indexOfMin = 0;

	for (let i = 1; i < arr.length; i++ ){
		if (minValue > arr[i]){
			minValue = arr[i];
			indexOfMin = i;
		}
	}

	return indexOfMin;
}


module.exports = {
	getCharactersNames,
	printCharacterNames,
	getNonHumanCharacters,
	getJerryInfo,
	isAllHuman,
	isAnyFishPerson,
	minItem
};