const mongoose = require('mongoose');

const connection_string = process.env.DB_URI;

mongoose.connect(connection_string, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true 
}).then( () => {
  console.log('Database connected');
} ).catch( err => {
  console.log(err);
} );