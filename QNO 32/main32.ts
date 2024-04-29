let current_userName = ['Laiba','Fatima','Ayesha','Hadia','Iram']
let new_userName = ['Waseem','Nihal','Huzaifa','Arisha','Sana']

new_userName.forEach(newOneuser => {
    let condition =  current_userName.some(currentOneuser => currentOneuser.toLowerCase() === newOneuser.toLowerCase())
if(condition) {
    console.log(`sorry! ${newOneuser}, You will need to enter a new person`)
}else{
    console.log(`${newOneuser} is available`)
}

})