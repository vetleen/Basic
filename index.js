const express = require('express')
const app = express();
const herokuPort = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Listening on port: '  + herokuPort + ".")
});