const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Route to serve the main.tsx file explicitly
app.get('/src/main.tsx', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'main.tsx'));
});

// Fallback route to serve index.html for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
