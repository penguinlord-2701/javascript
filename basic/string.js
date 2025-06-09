const name = "daksh";

const repocount = 52
console.log(name +repocount+"Value");// do not use this 

//
// backticks
console.log(`hello my name ${name}`);
const gamename = new String('daksh')

console.log(gamename[0]);
console.log(gamename.__proto__); // after . this are methods/functions and there are different methods

console.log(gamename.length);
//charAt((2)) => tell character 
//reverse of charAt() is indexOf(('a'))

const newstring = gamename.substring(0,2) // divides the string
console.log(newstring)


//slice is used often 
const anotherstring = gamename.slice(2,3) // produces k as output
console.log(anotherstring)

const n ="    daksh   ";
console.log(n.trim()); // removes whitespaces and /n 
const url ="https://daksh.com/%20daksh"
console.log(url.replace('%20', '-'))
//url.includes('daksh')=> provides output true
 
console.log(gamename.split('-'));
