const express = require('express');
const InstagramMetrics = require('./models/InstagramMetrics');

const app = express();

app.get('/instagram-metrics', async (req, res) => {
  const metrics = await InstagramMetrics.find();

  res.json(metrics);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});