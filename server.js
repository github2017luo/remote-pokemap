var express = require('express');
var proxy = require('http-proxy-middleware');


var app = express();
app.use(express.static('public'));


app.use('/map-data', proxy({target: 'https://594c35f8.ngrok.io', changeOrigin: true,
    logLevel:'debug'
}));


app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
