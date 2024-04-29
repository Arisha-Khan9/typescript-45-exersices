function describe_City (city:string , country:string = "Pakistan") {
    console.log(`${city}, is in ${country}.`)
}

// calling a function with different cities
describe_City("Karachi")

describe_City("Lahore")

describe_City("Makkah","Saudia Arabia")