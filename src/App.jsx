import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from 'react'; 
import Home from './pages/Home';
import Explain from './pages/Explain';
import Save from './pages/Save';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
///로컬 스토리지 부분 도움 받음//
  useEffect(() => {
    localStorage.setItem('nowtime', 'App loaded at ' + new Date().toLocaleString());
    return () => {
      console.log('App 컴포넌트가 언마운트됩니다.');
    };
  }, []); 
///로컬 스토리지 부분 도움 받음///
  return (
    <Router>
      <div className="container mt-3">
        <nav className="mb-4">
          <Link to="/" className="btn btn-outline-primary me-2">메인</Link>
          <Link to="/Explain" className="btn btn-outline-secondary me-2">설명</Link>
          <Link to="/Save" className="btn btn-outline-success">일기 저장소</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explain" element={<Explain />} />
          <Route path="/Save" element={<Save />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


