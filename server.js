const express = require('express');
const path = require('path');
const app = express();

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/liveChatRoom', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'liveChatRoom.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server running');
});
