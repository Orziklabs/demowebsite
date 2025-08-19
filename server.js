const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Handle form submissions
app.post('/submit-quote', (req, res) => {
  // Here you would typically save to a database or send email
  console.log('Quote request received:', req.body);
  res.json({ success: true, message: 'Quote request submitted successfully!' });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
