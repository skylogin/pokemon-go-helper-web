const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'application/json' }));


/* Main Page */
app.get('/', function(req, res){
	fs.readFile('./public/index.html', function(error, data) {
    if(error != undefined) {
        res.writeHead(404);
        res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);

    }
  });
});

/* LoginPage Route */
const loginRoute = require('./route/login.js');
app.use('/login', loginRoute);


/* Server Start using 3000 */
app.listen(3000, function(){
	console.log('server listening on port 3000');
});