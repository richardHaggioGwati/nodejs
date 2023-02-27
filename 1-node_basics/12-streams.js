// when reading files synchronously, in some cases the file may be too big. In that case we use streams
const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });

// default 64kb
// last buffer - reminder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// Encoding will format the output from stream
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

stream.on('data', (result) => {
	console.log(result);
});
