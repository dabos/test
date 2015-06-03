var lsmod = require('./lsmodule.js');

lsmod(process.argv[2], process.argv[3], function(err, files) {
  if (err){
    return("Error!!! :", err);
  }
    files.forEach(function(file) {
      console.log(file);
    })
  })
