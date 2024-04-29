// Qno: 15,

let guestlist = ['maryam','ramsha','ashba','ifrah']
let dontcome = guestlist[3];
console.log(`${dontcome}, is not coming.`);
guestlist.splice(3, 3, "arishma");

guestlist.forEach(guestlists => console.log(`Hey ${guestlists}, lets catchup over a delicious dinner at our place!`));

