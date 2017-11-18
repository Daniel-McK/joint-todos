const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const db = require('../config/db');
const User = require('../app/server/models/user');

mongoose.disconnect();

mongoose.connect(db.url, { useMongoClient: true });

// @TODO fill in values
const admin = new User();
admin.firstName = 'FirstName';
admin.lastName = 'LastName';
admin.email = 'admin@temp.ca';
admin.password = bcrypt.hashSync('Temp');
admin.admin = true;

admin.save(function (err) {
  if (err) {
      console.log('failed to create admin');
  } else {
    console.log('admin created');
  }
  return;
});
