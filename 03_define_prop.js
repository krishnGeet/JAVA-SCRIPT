// i am explaning how to implement that aadhar number of any user cant  be changed

let user = {
    name: "kshitige",
    aadharNo: 124578933,
    hasBankAcc: false
}
Object.freeze(user); // by this i cannot change any value of object

user.name = "KShitige";
console.log(user.name);

Object.defineProperty(user, "aadharNo", {writable: false}); // we can specifiy the only value that can be altered

user.aadharNo = 1547;
console.log(user.aadharNo);
