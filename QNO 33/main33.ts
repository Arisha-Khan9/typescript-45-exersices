let numbers = [1,2,3,4,5,6,7,8,9]

// FOR LOOP
// for loop is same as FOREACH condition erspecially used for numbers

for(let one_number of numbers) {
    let ordinalEnding:string;

    if(one_number === 1){
        ordinalEnding = "st"
    }

    else if(one_number === 2){
        ordinalEnding = "nd"
    }

    else if(one_number === 3){
        ordinalEnding = "rd"
    }

    else{
          ordinalEnding = "th"
    }

    console.log(`${one_number}${ordinalEnding}`)

    }

