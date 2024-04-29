function making_sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("lets make a sandwitch with the following items.\n");
    items.forEach(function (oneItem) { return console.log("-" + oneItem); });
    console.log("\n  now enjoy sandwitch");
}
// CALL A FUNCTION 3 TIMES WITH 3 DIFFERENT ARGUMENTS
making_sandwitch("bun,saled,chicken,mayonase,cheese,sauces");
making_sandwitch("bun,mayonase,saled");
making_sandwitch("bun,saled,chicken,cheese,mayonase,sauce,ketchup");
