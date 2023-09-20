import Book_event from "./Book.event";
import QRCodeScanner from "./Qr.scan"
import Landing_page from "./Home"
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/book/event" element={<Book_event />} />
        <Route path="/scan" element={<QRCodeScanner />} />
      </Routes>
    </Router>




  )
}

export default App
