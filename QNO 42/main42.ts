function show_magician(magician:string[]) {
    magician.forEach(name => console.log(name)
    );
}
function great_magician(magician:string[]) {
    return magician.map(name => `The great ${name}`)
}
//THE FUNCTION MAP  IS USED TO PRINT ANOTHER MESSAGE WITH THE PREVIOUS MESSAGE

let magician_name = ['laiba','fatima','sara']

// calling greatMagician to modify the magician name
let greatMagician= great_magician(magician_name);

// Calling cosole to modify the list of magician name
console.log(greatMagician)