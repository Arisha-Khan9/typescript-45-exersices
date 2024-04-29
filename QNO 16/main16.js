// Qno: 16
var guestlist1 = ['maryam', 'ramsha', 'ashba', 'ifrah'];
var dontcome1 = guestlist1[3];
console.log("".concat(dontcome1, ", is not coming."));
guestlist1.splice(3, 3, "arishma");
//splice is used to add or delete something
// Informing everyone that we found the bigger dinner table
console.log("Hey, i would like to inform you that I found a bigger dinner table. So, i will be inviting more friends. ");
// adding a new guest at starting
guestlist1.unshift("nihal");
// unshift is used to add something at the start of array
//adding a new guest at the end of the array
guestlist1.push("huzaifa");
// to find the middle of an array, we can use,
var middleName = Math.floor(guestlist1.length / 2);
// MATH.FLOOR used for: if the value is in point  thhen it willbe round it.
// adding a new guest at the middle of an array
guestlist1.splice(middleName, 0, "waseem");
// print invitation to everyone
guestlist1.forEach(function (guests) { return console.log("HEY ".concat(guests, ", lets catchup over a delicious dinner at our place!")); });
