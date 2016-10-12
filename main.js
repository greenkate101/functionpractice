// 1
function sum(a, b) {
	return a + b;
}

console.log(sum(4, 6));
console.assert(sum(4, 6) === 10)
// 2

function avg(a, b, c) {
  return (a + b + c) / 3;
}

console.log(avg(2, 4, 6));
console.assert(avg(2, 4, 6) === 4);

// 3
function getLength(str) {
	for ( var i = 0; i < str.length; i++) {
        return str.length;
	}
}

console.log(getLength('hey whats up hello'));
console.assert(getLength('hey') === 3);

// 4
function greaterThan(x, n) {
	if (x > n) {
		return true;
	} else {
		return false;
	}
}

console.log(greaterThan(6, 3));
console.assert(greaterThan(6, 3) === true);
console.assert(greaterThan(3, 6) === false);

// 5

function greet(name) {
	 return ('Hello,' + name + '!');
}

console.log(greet('katie'));
console.assert(greet('katie') === 'Hello,' + 'katie' + '!');

// 6

function madlib(words1, words2, words3, words4) {
	return ('I' + ' ' + 'love' + ' ' + 'to' + ' ' + words1 + ' ' + words2 + ' ' + 'all' + ' ' + words3 + ' ' + words4);
}

console.log(madlib('nom', 'food', 'day', 'yay'));





