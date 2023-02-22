const express = require('express');
const app = express();
// request => middleware => response


app.listen(5000, () => {
	console.log('listening on port 5000...');
});
