const express = require('express');
const path = require('path');

const app = express();

// Serve the static guide. `extensions: ['html']` lets "/" resolve to index.html.
app.use(express.static(__dirname, { extensions: ['html'] }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`VeryChat KYC guide running on port ${port}`);
});
