//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestarray = ["fatima", "suman", "hareem"];
var cannotattend = "hareem";
console.log("".concat(cannotattend, " can not make it , for dinner"));
var newguest = "halima";
guestarray[guestarray.indexOf(cannotattend)] = newguest;
console.log(guestarray);
guestarray.map(function (items) { return console.log("hello,".concat(items, " you are invited to dinner ")); });
