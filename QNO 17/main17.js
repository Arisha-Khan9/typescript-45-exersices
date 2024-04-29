var guestlist2 = ['maryam', 'ramsha', 'ashba', 'ifrah'];
var dontcome2 = guestlist2[3];
console.log("".concat(dontcome2, ", is not coming."));
guestlist2.splice(3, 3, "arishma");
//splice is used to add or delete something
// Informing everyone that we found the bigger dinner table
console.log("Hey, i would like to inform you that I found a bigger dinner table. So, i will be inviting more friends. ");
// adding a new guest at starting
guestlist2.unshift("nihal");
// unshift is used to add something at the start of array
//adding a new guest at the end of the array
guestlist2.push("huzaifa");
// to find the middle of an array, we can use,
var middleName1 = Math.floor(guestlist2.length / 2);
// MATH.FLOOR used for: if the value is in point  thhen it willbe round it.
// adding a new guest at the middle of an array
guestlist2.splice(middleName1, 0, "waseem");
// print invitation to everyone
guestlist2.forEach(function (guests) { return console.log("HEY ".concat(guests, ", lets catchup over a delicious dinner at our place!")); });
// print a msg that the bigger dinner table wont aarive at time!
console.log("HEY! ".concat(guestlist2, ", I want to tell you that the bigger dinner table won't arrive at time and I have space for only 2 friends."));
// removed friends until the 2 friends left here
while (guestlist2.length > 2) {
    var removedfriends = guestlist2.pop();
    console.log("sorry! ".concat(removedfriends, ", i cant inviting you for dinner"));
}
//print a mesg for those who are left in the list
guestlist2.forEach(function (twofriends) { return console.log("HEY ".concat(twofriends, ", luckly! you are still inviting for dinner!")); });
// Removing the last two guests to empty the list
guestlist2.pop();
guestlist2.pop();
console.log('empty list:', guestlist2);
// pop  is used to remove something one by one from an array or list
// while is a condition which is used for if or else
