let userName = ['Admin','laiba','alishba','wania','ramsha']

userName.forEach(oneuser => {
    if(oneuser == "Admin"){
        console.log(`Hello ${oneuser}, would you likr to see a status report`)
    }
    else{
        console.log(`Hello ${oneuser}, Thankyou for logging again`)
    }
})
