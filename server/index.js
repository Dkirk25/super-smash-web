const express = require('express');
const app = express();
let port = process.env.PORT || 3200;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Roger Roger, port: ${port}`);
})