const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/qr', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(`https://qrickit.com/api/qr?d=${encodeURIComponent(url)}&qrsize=150`, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/png');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error generating QR code');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
