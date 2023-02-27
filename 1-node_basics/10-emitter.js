const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
	console.log(`data received user: ${name} with id: ${id}`);
});
// you can listen for more than one event with the same type being the first property that is passed
customEmitter.on('response', () => {
	console.log(`some other logic here`);
});

// emit is used as a way to call the customEmitter
customEmitter.emit('response', 'david', 08643356);
