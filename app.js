console.log('Staring app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

var filteredArray = _.uniq(['Mike', 'Mike', 1,2,3 ,4 ,5,1]);
console.log(filteredArray);


// var res = notes.add(5, 6);
// console.log(res);

// var user = os.userInfo();
// // console.log(user);
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
