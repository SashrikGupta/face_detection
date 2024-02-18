import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './assets/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './assets/navbar.jsx';
import Home from './assets/Home/Home.jsx';
import Face from './assets/Face/Face.jsx';
import Upload from './assets/Upload/Upload.jsx';
import SCW from './assets/Context/StoreContext.jsx';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <SCW>
      <div id="page">
        <Sidebar widi="280px" high="73px" />
        <div className="cont">
          <Navbar high="73px" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FD" element={<Face />} />
            <Route path="/UP" element={<Upload />} />
          </Routes>
        </div>
      </div>
    </SCW>
  );
}

export default App;
