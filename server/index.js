const path = require('path');
const express = require('express');
const app = express();
let port = process.env.PORT || 3200;

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile('/Users/austin/Documents/code/smash/super-smash-web/dist/index.html');
})

app.listen(port, () => {
  console.log(`Roger Roger, port: ${port}`);
})