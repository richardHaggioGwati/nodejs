// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum dependencies)

const { johnDoe, david } = require('./2-names');
const sayHi = require('./1-utils');

/**
 * ? when you import a module that has a function being invoked in it, the function will be executed
 */
// require('./3-invoke-module')

sayHi('susan');
sayHi(johnDoe);
sayHi(david);