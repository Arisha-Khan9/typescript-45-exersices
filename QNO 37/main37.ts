function make_shirt (size:string = "large",  printMessage: string = "i love typescript") {
    console.log(`you selected "${size}" size shirt, with message "${printMessage}", print on shirt.`)
}
// Calling a function with by defailt value
make_shirt();

// Calling a function with medium size
make_shirt("Medium");

// Calling a function with small size and 
make_shirt("small","codewithtypescript")
