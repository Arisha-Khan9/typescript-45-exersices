var userName = ['Admin', 'laiba', 'alishba', 'wania', 'ramsha'];
userName.forEach(function (oneuser) {
    if (oneuser == "Admin") {
        console.log("Hello ".concat(oneuser, ", would you likr to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thankyou for logging again"));
    }
});
