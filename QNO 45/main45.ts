function car_object (manufacturer:string,model:string,...options) {
    
    // INITIALIZE the object with manufacturer and model
    let car = {
        manufacturer:manufacturer,
        model:model,
    };
    
    // Adding addional options
    options.forEach(option => {
        let [key,value]  = option.split(":")
        car[key.trim()] = value.trim()
    });
    return car;
}
// call the function 
let myCar = car_object("toyota","corolla","year:2021","colour:red","bulletproof:true")
console.log(myCar)