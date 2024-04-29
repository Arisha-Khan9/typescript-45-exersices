var userName = [];
if (userName.length === 0) {
    console.log("your list is empty");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser == "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", Thankyou for logging again"));
        }
    });
}
