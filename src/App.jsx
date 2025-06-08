import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <nav className="mb-4">
          <Link to="/" className="btn btn-outline-primary me-2">홈</Link>
          <Link to="/about" className="btn btn-outline-secondary me-2">소개</Link>
          <Link to="/archive" className="btn btn-outline-success">보관함</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
