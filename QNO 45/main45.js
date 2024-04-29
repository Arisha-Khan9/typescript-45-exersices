function car_object(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // INITIALIZE the object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Adding addional options
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function 
var myCar = car_object("toyota", "corolla", "year:2021", "colour:red", "bulletproof:true");
console.log(myCar);
