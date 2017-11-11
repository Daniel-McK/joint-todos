var express = require('express');

const PORT = 80;
var app = express();

app.use(express.static('./'));

// fallback for client-side routing
app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log('joint-todos listening on port ' + PORT);
});
