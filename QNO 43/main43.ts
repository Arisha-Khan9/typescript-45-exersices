function show_magician(magician:string[]) {
    magician.forEach(name => console.log(name)
    );
}

// function to make a magician great through .map. it modifies the array
function great_magician(magician:string[]) {
    return magician.map(name => `The great ${name}`);
}
//THE FUNCTION MAP  IS USED TO PRINT ANOTHER MESSAGE WITH THE PREVIOUS MESSAGE

let magician_name = ['laiba','fatima','sara'];

// making a copy of magician name through using slice function
let copy_magicianName = magician_name.slice();

// calling a function great_magician with a copy of an array
let copy_Great_magician = great_magician(copy_magicianName);

// calling a functions show magician to print the original array
console.log("original array\n")
show_magician(magician_name);

// calling a functions show magician to print the copy array
console.log("\ncopied array\n")
show_magician(copy_Great_magician);