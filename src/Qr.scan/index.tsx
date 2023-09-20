import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";

const QRCodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const scanner = new QrScanner(videoRef.current, (result: string) => {
        // Handle the QR code result here
        console.log(`QR Code detected: ${result}`)
        alert(`QR Code detected: ${result}`);
        scanner.stop();
      });

      scanner.start();
    }

  }, []);



  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1>QR Code Scanner</h1>
      <video ref={videoRef} style={{maxWidth: "30%",
    minHeight: "500%",border:"10px solid rgba(128, 128, 128,40%)",borderRadius:"5px" }} />
    </div>
  );
};

export default QRCodeScanner;
