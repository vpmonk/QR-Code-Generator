import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [qrGenerated, setQRGenerated] = useState(false);

  const generateQRCode = () => {
    setQRGenerated(true);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode-canvas');
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to generate QR code"
      />
      <div className="buttons">
        <button onClick={generateQRCode} disabled={!text}>Generate QR Code</button>
        {qrGenerated && (
          <button onClick={downloadQRCode}>Download QR Code</button>
        )}
      </div>
      {qrGenerated && <QRCode id="qrcode-canvas" value={text} />}
    </div>
  );
}

export default App;
