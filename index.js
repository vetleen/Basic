const express = require('express')
const app = express();
const herokuPort = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello other world!')
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port: '  + herokuPort + ".")
});