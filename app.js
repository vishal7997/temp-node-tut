// npm - global command, comes with node
// npm --version

// local dependency - to use it only in this project
// npm i <packageName>

// global dependency - to use it in any project
// npm i -g <packageName>

// package.json - manifest file ( stores important info about project )
// 3 types to create package.json
// 1. manual approach (create package.json in a root, create properties, etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

// how to use installed packages in application
// const { iteratee } = require('lodash');
const _ = require('lodash');

const itmes = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(itmes);
console.log(newItems);