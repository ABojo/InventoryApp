require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const { DB_CONNECTION_STRING, DB_USER, DB_PASS, DB_NAME } = process.env;
const connectionString = DB_CONNECTION_STRING.replace('<username>', DB_USER)
  .replace('<password>', DB_PASS)
  .replace('<db_name>', DB_NAME);

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database!');
  });

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is listenting!');
});
