function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "i love typescript"; }
    console.log("you selected \"".concat(size, "\" size shirt, with message \"").concat(printMessage, "\", print on shirt"));
}
// Calling a function with by defailt value
make_shirt();
// Calling a function with medium size
make_shirt("Medium");
// Calling a function with small size and 
make_shirt("small", "codewithtypescript");
