// Qno: 15,
var guestlist = ['maryam', 'ramsha', 'ashba', 'ifrah'];
var dontcome = guestlist[3];
console.log("".concat(dontcome, ", is not coming."));
guestlist.splice(3, 3, "arishma");
guestlist.forEach(function (guestlists) { return console.log("Hey ".concat(guestlists, ", lets catchup over a delicious dinner at our place!")); });
