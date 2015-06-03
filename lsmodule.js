var fs = require('fs');

module.exports = function(dirname, ext, callback){ 
  fs.readdir(dirname, function(err, data){
    if(err){
      return callback(err);
    }
    data = data.filter(function(value){
      return (value.indexOf(ext) >0);

  });
   callback(null, data);
});
}
