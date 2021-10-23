var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

// middlewares
app.use(express.json())

// routes
const routes = require('./routes/index.js')
app.use(routes)


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



