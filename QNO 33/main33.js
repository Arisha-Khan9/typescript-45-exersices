var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// FOR LOOP
// for loop is same as FOREACH condition erspecially used for numbers
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var one_number = numbers_1[_i];
    var ordinalEnding = void 0;
    if (one_number === 1) {
        ordinalEnding = "st";
    }
    else if (one_number === 2) {
        ordinalEnding = "nd";
    }
    else if (one_number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(one_number).concat(ordinalEnding));
}