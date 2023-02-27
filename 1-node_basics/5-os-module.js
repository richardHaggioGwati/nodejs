// Operating system module / OS
const os = require('os');

// info about current user
const user = os.userInfo();
console.log('🚀 ~ file: app.js:6 ~ user', user);

// method that returns system uptime in seconds
console.log(`The systems uptime in seconds is ${os.uptime()}`);

// OS information
const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};

console.log('🚀 ~ file: app.js:18 ~ currentOs', currentOs);
