import React, { useState } from 'react';
import axios from 'axios';

const QrCodeGenerator: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleShortenUrl = async () => {
    try {
      const response = await axios.get(`https://api.tinyurl.com/create?url=${encodeURIComponent(longUrl)}&api_token=YOUR_API_TOKEN`);
      const tinyUrl = response.data.data.tiny_url;
      setShortUrl(tinyUrl);
      const qrCodeResponse = await axios.get(`/api/qr?url=${encodeURIComponent(tinyUrl)}`);
      setQrCodeUrl(qrCodeResponse.data);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleShortenUrl}>Generate QR Code</button>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default QrCodeGenerator;
