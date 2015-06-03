var sum = 0;
process.argv.forEach(function(val, index, array) {
  if(!isNaN(val)) {
    sum+=parseInt(val);
  }
  
});
console.log(sum);
