var express = require('express');

const PORT = 80;
var app = express();

app.use(express.static('./'));

app.listen(PORT, () => {
  console.log('joint-todos listening on port ' + PORT);
});
