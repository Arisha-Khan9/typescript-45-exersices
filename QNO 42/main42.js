function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function great_magician(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
//THE FUNCTION MAP  IS USED TO PRINT ANOTHER MESSAGE WITH THE PREVIOUS MESSAGE
var magician_name = ['laiba', 'fatima', 'sara'];
//call the function for printing each magician name
var greatMagician = great_magician(magician_name);
console.log(greatMagician);
