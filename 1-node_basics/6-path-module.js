const path = require('path');

// returns the system path separator
console.log(path.sep);

// joins a sequence of path segments
/**
 * ! remember to create the directories and files below
 */
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log('🚀 ~ file: app.js:11 ~ filePath', filePath);

// returns the base path
const basePath = path.basename(filePath);
console.log('🚀 ~ file: app.js:15 ~ basePath', basePath);

// returns the absolute path
const absolute = path.resolve(__dirname, '/content', 'subfolder', 'test.txt');
console.log("🚀 ~ file: 6-path-module.js:19 ~ absolute", absolute)
