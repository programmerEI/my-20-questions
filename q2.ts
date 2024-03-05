//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personame:string = "laiba";

//lower case
console.log(personame.toLowerCase());

// upper case
console.log(personame.toUpperCase());

// title case 

console.log(personame.charAt(0).toUpperCase() + (personame.slice (1,5)));
