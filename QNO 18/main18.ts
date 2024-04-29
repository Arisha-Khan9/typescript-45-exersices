// make an array of coubtries to visit in non-alphabetical order and print it in original order

let visitingCountries = ['saudia Arabia','pakistan','australia','turkey','china']
console.log(visitingCountries)

// sorting in alphabetical order without removing the original order
console.log("alphabetical order:",[...visitingCountries].sort());
// three dots(...) are used to copying the work from original work
// sort is used to convert the original list from non alphabetical to alphabetical order

// print the original alphabetical for checking
console.log("still in original list:", visitingCountries);

//print the reversed alphabetical order without changing the original  order
console.log("reversed order:", [...visitingCountries].reverse())

// print the original alphabetical again for checking
console.log("still in original list:", visitingCountries);

// reverse the order of original list
console.log("reversed the original order:", visitingCountries.reverse());

// reverse the order again in original list
console.log("back to original order:", visitingCountries.reverse());

// sort the order again so it show its alphabetical  order
console.log("again in alphabetical order:", visitingCountries.sort());

// again reverse the order of original list
console.log("again reversed the original order:", visitingCountries.reverse());

