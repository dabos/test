var fs = require('fs');

var f = fs.readFile(process.argv[2]);
console.log(f.toString().split('\n').length -1);

