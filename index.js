const express = require('express');

const router = require('./app/server/router');

const PORT = 80;
const app = express();

app.use(express.static('./'));

app.use(router);

// fallback for client-side routing
app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log('joint-todos listening on port ' + PORT);
});
