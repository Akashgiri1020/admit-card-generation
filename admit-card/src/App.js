import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import AdmitCard from './components/AdmitCard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/admit-card" element={<AdmitCard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
