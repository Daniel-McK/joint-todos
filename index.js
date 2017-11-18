const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./app/server/router');
const db = require('./config/db');

mongoose.disconnect();
mongoose.connect(db.url, { useMongoClient: true });

const PORT = 80;
const app = express();

app.use(express.static('./'));
app.use(bodyParser.json());

app.use(router);

// fallback for client-side routing
app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log('joint-todos listening on port ' + PORT);
});
