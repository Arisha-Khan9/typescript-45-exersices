let userName = ['Admin','laiba','alishba','wania','ramsha']
if(userName.length === 0) {
    console.log("your list is empty")
}
else{
userName.forEach(oneuser => {
    if(oneuser == "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report`)
    }
    else{
        console.log(`Hello ${oneuser}, Thankyou for logging again`)
    }
})
}