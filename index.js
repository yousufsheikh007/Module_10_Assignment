// Answer to the question no. 1
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 3)); 


// Answer to the question no. 2
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is 5 odd?", isOdd(5)); 


// Answer to the question no. 3
function findMin(array) {
    return Math.min(...array);
}
console.log("Smallest number:", findMin([3, 5, 2, 8, 1])); 


// Answer to the question no. 4
function filterEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([3, 5, 2, 8, 1])); 


// Answer to the question no. 5
function sortArrayDescending(array) {
    return array.sort((a, b) => b - a);
}
console.log("Sorted in descending order:", sortArrayDescending([3, 5, 2, 8, 1])); 


// Answer to the question no. 6
function lowercaseFirstLetter(string) {
    if (string.length === 0) return string;
    return string[0].toLowerCase() + string.slice(1);
}
console.log("Lowercased first letter:", lowercaseFirstLetter("Hello"));


// Answer to the question no. 7
function findAverage(array) {
    if (array.length === 0) return 0;
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
}
console.log("Average:", findAverage([3, 5, 2, 8, 1]));


// Answer to the question no. 8
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?", isLeapYear(2024));
