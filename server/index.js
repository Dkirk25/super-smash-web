require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(3200, () => {
  console.log('Roger Roger, port 3200');
})