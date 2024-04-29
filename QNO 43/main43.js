function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// function to make a magician great through .map. it modifies the array
function great_magician(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
//THE FUNCTION MAP  IS USED TO PRINT ANOTHER MESSAGE WITH THE PREVIOUS MESSAGE
var magician_name = ['laiba', 'fatima', 'sara'];
// making a copy of magician name through using slice function
var copy_magicianName = magician_name.slice();
// calling a function great_magician with a copy of an array
var copy_Great_magician = great_magician(copy_magicianName);
// calling a functions show magician to print the original array
console.log("original array\n");
show_magician(magician_name);
// calling a functions show magician to print the copy array
console.log("\ncopied array\n");
show_magician(copy_Great_magician);
