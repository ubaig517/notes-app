const validator = require('validator'), 
getNotes = require('./notes');

console.log(getNotes());

console.log(validator.isEmail('food.com'));