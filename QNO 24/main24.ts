//more tests

// Test of equality and non-equality with string
let game = "cricket";
console.log("\n is game is equals to cricket");
console.log(game == "cricket");

console.log("\n is game is unequals to cricket");
console.log(game != "cricket");

// Test using the lower case function
let uppercase = "KITE";
console.log("\n is uppercase is equals to KITE");
console.log(uppercase.toLowerCase() == "kite");

console.log("\n is uppercase is unequals to cricket");
console.log(uppercase.toLowerCase() != "kite");

// NUMERICAL TESTS
// Test of eqauality and unequality
let num = 10;
console.log("\n is num is equal to 10")
console.log(num == 10);

console.log("\n is num is unequal to 10")
console.log(num != 10);

//Test of greater or less than
console.log("\n is num is greater than to 10")
console.log(num > 10);

console.log("\n is num is less than to 10")
console.log(num < 10);

// Test of greater than or equals to
console.log("\n is greater or equals to 10")
console.log(num >= 10);

// Test of less than or equals to
console.log("\n is less than or equals to 10")
console.log(num <= 10);

// TEST USING "AND" OR "OR" OPERATORS
// and operator
let box1 = 8;
let box2 = 9;

let logicalAnd = (box1==box2) && (box1<box2)
console.log(logicalAnd)

let logicalAnd1 = (box1!=box2) && (box1<box2)
console.log(logicalAnd1)

// or operator
let logicalOr = (box1!=box2) || (box1<box2)
console.log(logicalOr)

let logicalOr1 = (box1!=box2) || (box1>box2)
console.log(logicalOr1)

let array = ['apple','mango','banana','grapes']
console.log("is mango is prensent in  the array")
console.log(array.includes("mango"));

console.log("is orange is prensent in  the array")
console.log(array.includes("orange"));









