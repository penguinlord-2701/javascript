// STACK (primitive)=> duplicate & HEAP(NON-PRIMITIVE) => refrence

let myyoutubename = "dakshdotcom"
let anothername = myyoutubename
anothername ="chaiaurcode"

console.log(myyoutubename)
console.log(anothername)

let user ={
    email : "daksh@google.com",
    upi : "user@yblbank",
}

let user2 =user

user2.email = "daksh1@google.com" // overwrite og mail

console.log(user.email)
console.log(user2.email)