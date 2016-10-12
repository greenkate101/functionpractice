// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(max(5, 2));
console.assert(max(5, 2) === 5);
console.assert(max(2, 5) === 5);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
	return max(max(a, b), c);
}

console.assert(maxOfThree(1, 3, 5) === 5);
console.assert(maxOfThree(5, 3, 1) === 5);


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			return true;
	} else {
			return false;
		}	
	
}

console.log(isVowel(b));
console.assert(isVowel('a') === true);
console.assert(isVowel('b') === false);


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
	var result = '';
	var char;
	for (var i = 0; i < phrase.length; i++) {
		char = phrase[i];
	    if (!(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
	    	result += char + 'o' + char;
		} else {
			result += char;
		}
	}
	return result;
}

 console.log(rovarspraket('this is fun'));
 console.assert(rovarspraket('this is fun') === 'tothohisos o isos o fofunon');

// ---------------------
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse (str) {
	var result = '';
	for (var i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

var input = 'jag tester';
var reversed = reverse(input);

console.log(reversed);
console.assert(reverse('jag tester') === 'retset gaj');
