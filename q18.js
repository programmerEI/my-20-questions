//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//name array
var guestarray = ["fatima", "suman", "hareem"];
//send message
guestarray.map(function (items) { return console.log("hello,".concat(items, " you are invited to dinner ")); });
console.log(guestarray.length, "people are invited to dinner");
