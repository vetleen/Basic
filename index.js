const express = require('express')
const app = express();
const herokuPort = process.env.PORT;
const db = process.env.MONGODB_URI;

// Connect to database
var mongoose = require('mongoose');
//console.log("trying to connect to: " + db)
mongoose.connect(db, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("DB successfully connected!");
});


// App
app.get('/', (req, res) => {
  res.send('Hello other world!')
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port: '  + herokuPort + ".")
});