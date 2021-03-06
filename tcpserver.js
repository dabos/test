 var net = require('net')

 function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
 }

 function now () {
  var date = new Date()
    console.log("month is: " + date.getMonth())
  return date.getFullYear() + "-" +
         zeroFill(date.getMonth() + 1) + "-" +
         zeroFill(date.getDate()) + " " +
         date.getHours() + ":" +
         date.getMinutes()
 }

var server = net.createServer(function (socket) {
  socket.end(now())
})

server.listen(process.argv[2])
