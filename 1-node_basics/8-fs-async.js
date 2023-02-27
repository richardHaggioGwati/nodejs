/**
 * ! this is the asynchronous version of of reading and writing files.
 */
const { readFile, writeFile } = require('fs');

console.log('starting tasks...');
readFile('./content/first.txt', 'utf-8', (error, result) => {
	if (error) {
		console.log(error);
		return;
	}
    const first = result;
    
	readFile('./content/second.txt', 'utf-8', (error, result) => {
		if (error) {
			console.log(error);
			return;
		}
		const second = result;

		// the option to provide a flag indicating appending is also available for writeFile()
		writeFile(
			'./content/result-sync.txt',
            `Here is the result: ${first}, ${second}. Created with a asynchronous function`, (error, result) => {
                if (error) { 
                    console.log(error);
                }
                console.log('completed asynchronous task');
            }
		);
	});
});

console.log('beginning with next task');
