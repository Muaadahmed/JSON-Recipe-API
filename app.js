const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log("connected...");
})

app.get('/', (req, res) => {
  res.json({name: "Muaad"});
})