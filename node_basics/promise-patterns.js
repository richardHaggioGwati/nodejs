const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(readFile);

// using async function
// for efficiency we can import fs as a promise
const start = async () => {
	try {
		// const firstFile = await readFilePromise('./content/first.txt', 'utf-8');
		// const secondFile = await readFilePromise('./content/second.txt', 'utf-8');
		const firstFile = await readFile('./content/first.txt', 'utf-8');
		const secondFile = await readFile('./content/second.txt', 'utf-8');
		await writeFile(
			'./content/promise-result.txt',
			`This is so amazing: ${firstFile} & the second is ${secondFile}`,
		);
		console.log(firstFile, secondFile);
	} catch (error) {
		console.error(error);
	}
};

start();

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf-8', (error, data) => {
// 			if (error) return reject(error);
// 			resolve(data);
// 		});
// 	});
// };

// callbacks method
// getText('./content/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error));
			