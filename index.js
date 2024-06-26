const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/donate', (req, res) => {
  const { page } = req.params;
  res.sendFile(path.join(__dirname, 'public', `donate.html`));
});

app.get('/about', (req, res) => {
  const { page } = req.params;
  res.sendFile(path.join(__dirname, 'public', `about.html`));
});

app.get('/contact', (req, res) => {
  const { page } = req.params;
  res.sendFile(path.join(__dirname, 'public', `contact.html`));
});

app.get('/services', (req, res) => {
  const { page } = req.params;
  res.sendFile(path.join(__dirname, 'public', `services.html`));
});

app.get('/tvdisplay', (req, res) => {
  const { page } = req.params;
  res.sendFile(path.join(__dirname, 'public', `tvdisplay.html`));
});

app.get('/tvdisplay2', (req, res) => {
  const { page } = req.params;
  res.sendFile(path.join(__dirname, 'public', `tvdisplay2.html`));
});


// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(443, () => {
  console.log('Server is running on port 443');
});