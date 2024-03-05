//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//name array
var guestarray = ["fatima", "suman", "hareem"];
// cannot make dinner
var cannotattend = "hareem";
console.log("".concat(cannotattend, " can not make it , for dinner"));
// invite new guest
var newguest = "halima";
guestarray[guestarray.indexOf(cannotattend)] = newguest;
//send message
//guestarray.map((items)=> console.log(`hello,${items} you are invited to dinner `));
console.log("welcome  all we found a bigger dinner table!");
guestarray.unshift("iqra");
var middleGuest = "aqsa";
var midleIndex = guestarray.length / 2;
guestarray.splice(midleIndex, 0, middleGuest);
guestarray.push("suman");
guestarray.map(function (items) { return console.log("\nDear ".concat(items, " you are invited todinner!")); });
