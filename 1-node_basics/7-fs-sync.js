/**
 * ! this is the synchronous version of of reading and writing files.
 */
const { readFileSync, writeFileSync } = require('fs');
console.log('start with task');
// read files from the filesystem. The second argument is the encoding of the file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// write files to the filesystem. The third argument is a flag to indicate whether to overwrite or append
writeFileSync(
	'./content/result-async.txt',
	`Here is the result: ${first}, ${second}.Created by synchronous function`,
	{ flag: 'a' },
);
console.log('done with task');
console.log('starting next task');
