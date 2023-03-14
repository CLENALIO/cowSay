const userInfo = require('./userInformation');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hi, my name is " + userInfo.name + " and I live in " + userInfo.campus,
    e : "oO",
    T : "U "
}));