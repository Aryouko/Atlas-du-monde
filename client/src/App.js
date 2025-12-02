import Pays from "./Pays";
import Langues from "./Langues";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <BrowserRouter>
        <Header />
        <div style={{ flex: 1 }}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/pays" />} />
          <Route path="/pays" element={<Pays />} />
          <Route path="/langues" element={<Langues />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
