var fs = require('fs');
var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
  list.filter(function(value){
    if(value.indexOf(ext) > 0){
      console.log(value);
    }
  });
});
