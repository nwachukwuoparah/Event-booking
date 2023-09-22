import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";

const QRCodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const scanner = new QrScanner(videoRef.current, (result: string) => {
        // Handle the QR code result here
        if (result) {
          alert(`QR Code detected: ${result}`);
          scanner.stop();
        }
      });

      scanner.start();
      
      return () => {
        scanner.stop();
      };
    }
  }, []);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <video ref={videoRef} style={{ width: "100%" }} />
    </div>
  );
};

export default QRCodeScanner;