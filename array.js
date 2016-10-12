// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var big = 0;

for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] > big) {
		big = numbers[i];
	}
}

console.log(big);


// ---------------------------
// 2. Find longest string
// ---------------------------

var words = strings;
var previouslyLongestWord = words[1];

for ( var i = 0; i < strings.length; i++) {
       if (words[i].length > previouslyLongestWord.length) {
       	previouslyLongestWord = words[i];
       }
}

console.log(previouslyLongestWord);


// ---------------------------
// 3. Find even numbers
// ---------------------------

for (var i = 0; i < numbers.length; i++) {
	    if (numbers[i] % 2 == 0) {
	    console.log(numbers[i]);
	    }
}



// ---------------------------
// 4. Find odd numbers
// ---------------------------
for (var i = 0; i < numbers.length; i++) {
	if(numbers[i] % 2 == 1)
		console.log(numbers[i]);
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var words = [];

for ( var i = 0; i < strings.length; i++) {
   if (strings[i].indexOf('is') > -1) {
   	   words.push(strings[i]);
   }
}
console.log(words);  


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var newArr = numbers.concat(strings);
console.log(newArr);



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


var teach =[];

for (var i = 0; i < instructors.length; i++) {
		if (instructors[i].teaches === 'JavaScript') {
			teach.push(instructors[i].firstname);
		
		}	
}

console.log(teach.sort());

// console.log(instructors);

