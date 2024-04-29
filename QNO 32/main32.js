var current_userName = ['Laiba', 'Fatima', 'Ayesha', 'Hadia', 'Iram'];
var new_userName = ['Waseem', 'Nihal', 'Huzaifa', 'Arisha', 'Sana'];
new_userName.forEach(function (newOneuser) {
    var condition = current_userName.some(function (currentOneuser) { return currentOneuser.toLowerCase() === newOneuser.toLowerCase(); });
    if (condition) {
        console.log("You will need to enter a new person");
    }
    else {
        console.log("youe username is available");
    }
});
