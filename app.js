const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HELLO FROM REPO SARA');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
