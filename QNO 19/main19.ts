
let guestlist2 = ['maryam','ramsha','ashba','ifrah']


// Informing everyone that we found the bigger dinner table
console.log(`Hey, i would like to inform you that I found a bigger dinner table. So, i will be inviting more friends. `);

// adding a new guest at starting
guestlist2.unshift("nihal");
// unshift is used to add something at the start of array

//adding a new guest at the end of the array
guestlist2.push("huzaifa");

// to find the middle of an array, we can use,
let middleName1:number = Math.floor(guestlist2.length / 2)
// MATH.FLOOR used for: if the value is in point  thhen it willbe round it.

// adding a new guest at the middle of an array
guestlist2.splice(middleName1, 0, "waseem");

// again inviting all friends
let lengthguest:number = guestlist2.length;
console.log(`we are inviting total ${lengthguest} friends`)


