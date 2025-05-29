// index.js
const express = require('express');
const fs = require('fs');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  const log = {
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    referer: req.headers['referer'] || '',
    time: new Date().toISOString()
  };

  console.log(log);
  fs.appendFileSync('visits.log', JSON.stringify(log) + os.EOL);
  res.send('<h1>Your visit has been logged.</h1>');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
