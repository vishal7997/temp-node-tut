// node uses CommonJS library
// where every file in node is a module (by default)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./4-names');
// const {vishal, madhuri} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-syntax');
require('./7-mind-granade');

// console.log(data);

sayHi('test');
sayHi(names.vishal);
sayHi(names.madhuri);
// sayHi(vishal);
// sayHi(madhuri);