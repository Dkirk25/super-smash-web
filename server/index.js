const express = require('express');
const app = express();
let port = process.env.PORT || 3200;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Roger Roger, port: ${port}`);
})